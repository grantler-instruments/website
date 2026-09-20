import { PassThrough } from "node:stream";

import type { EntryContext } from "react-router";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter } from "react-router";
import { isbot } from "isbot";
import type { RenderToPipeableStreamOptions } from "react-dom/server";
import { renderToPipeableStream } from "react-dom/server";
import { CacheProvider } from "@emotion/react";
import createEmotionServer from "@emotion/server/create-instance";
import createEmotionCache from "./createEmotionCache";

export const streamTimeout = 5_000;

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  routerContext: EntryContext,
) {
  if (request.method.toUpperCase() === "HEAD") {
    return new Response(null, {
      status: responseStatusCode,
      headers: responseHeaders,
    });
  }

  const cache = createEmotionCache();
  const { extractCriticalToChunks, constructStyleTagsFromChunks } =
    createEmotionServer(cache);

  return new Promise<Response>((resolve, reject) => {
    let shellRendered = false;
    const userAgent = request.headers.get("user-agent");

    const readyOption: keyof RenderToPipeableStreamOptions =
      (userAgent && isbot(userAgent)) || routerContext.isSpaMode
        ? "onAllReady"
        : "onShellReady";

    let timeoutId: ReturnType<typeof setTimeout> | undefined = setTimeout(
      () => abort(),
      streamTimeout + 1000,
    );

    const { pipe, abort } = renderToPipeableStream(
      <CacheProvider value={cache}>
        <ServerRouter context={routerContext} url={request.url} />
      </CacheProvider>,
      {
        [readyOption]() {
          shellRendered = true;
          const chunks: Buffer[] = [];
          const collector = new PassThrough({
            final(callback: (error?: Error) => void) {
              clearTimeout(timeoutId);
              timeoutId = undefined;

              const html = Buffer.concat(chunks).toString("utf-8");
              const styleTags = constructStyleTagsFromChunks(
                extractCriticalToChunks(html),
              );
              const document = `<!DOCTYPE html>${html.replace("</head>", `${styleTags}</head>`)}`;

              const body = new PassThrough();
              body.end(document);
              const stream = createReadableStreamFromReadable(body);

              responseHeaders.set("Content-Type", "text/html");

              resolve(
                new Response(stream, {
                  headers: responseHeaders,
                  status: responseStatusCode,
                }),
              );

              callback();
            },
          });
          collector.on("data", (chunk: Buffer) => chunks.push(chunk));

          pipe(collector);
        },
        onShellError(error: unknown) {
          reject(error);
        },
        onError(error: unknown) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        },
      },
    );
  });
}
