import type { ComponentType } from "react";
import EspNowMidi from "../components/things/EspNowMidi";
import Enomik from "../components/things/Enomik";
import Turntangilism from "../components/things/Turntangilism";
import B8C from "../components/things/B8C";
import Deemex from "../components/things/Deemex";
import Esrever from "../components/things/Esrever";
import BYODMCSE from "../components/things/BYODMCSE";
import GSC from "../components/things/GSC";
import Fernbedienung from "../components/things/Fernbedienung";
import WD3000 from "../components/things/WD3000";
import Spielerei from "../components/things/Spielerei";

import deemexThumbnail from "../assets/things/deemex/top.jpg";
import enomikThumbnail from "../assets/things/enomik/enomik_dongle_client.jpg";
import fernbedienungThumbnail from "../assets/things/fernbedienung/screenshot.png";
import gscThumbnail from "../assets/things/gsc/gsc_edit_screenshot.png";
import wd3000Thumbnail from "../assets/things/wd3000/screenshot_overview.png";
import spielereiThumbnail from "../assets/things/spielerei/render.png";
import b8cThumbnail from "../assets/things/b8c/DSCF6341.jpg";
import esreverThumbnail from "../assets/esrever_screenshot.png";
import byodmcseThumbnail from "../assets/things/byodmcse/screenshot.png";
import turntangilismThumbnail from "../assets/things/turntangilism/overview_resized.png";
import espNowMidiThumbnail from "../assets/things/esp-now-midi/topology.svg";

export type ThingItem = {
  slug: string;
  name: string;
  destination: string;
  title: string;
  description: string;
  thumbnail?: string;
  thumbnailAlt?: string;
  Component: ComponentType;
};

export const things: ThingItem[] = [
  {
    slug: "esp-now-midi",
    name: "ESP-NOW MIDI",
    destination: "/things/esp-now-midi",
    title: "ESP-NOW MIDI",
    description: "wireless midi over esp-now protocol",
    thumbnail: espNowMidiThumbnail,
    thumbnailAlt: "Two MIDI hosts connected over ESP-NOW to four ESP32-S2 Mini boards",
    Component: EspNowMidi,
  },
  {
    slug: "enomik",
    name: "Enomik 3000",
    destination: "/things/enomik",
    title: "Enomik 3000",
    description: "no-code toolkit for creating midi devices",
    thumbnail: enomikThumbnail,
    thumbnailAlt: "Enomik 3000 MIDI dongle",
    Component: Enomik,
  },
  {
    slug: "turntangilism",
    name: "Turntangilism 3000",
    destination: "/things/turntangilism",
    title: "Turntangilism 3000",
    description: "postdigital extension kit for traditional turntable setups",
    thumbnail: turntangilismThumbnail,
    thumbnailAlt: "Turntangilism 3000 overview",
    Component: Turntangilism,
  },
  {
    slug: "b8c",
    name: "Baby 8 Cubes",
    destination: "/things/b8c",
    title: "Baby 8 Cubes",
    description: "tangible step sequencer for kids, grandmas and everyone else",
    thumbnail: b8cThumbnail,
    thumbnailAlt: "Baby 8 Cubes in performance",
    Component: B8C,
  },
  {
    slug: "deemex",
    name: "Deemex",
    destination: "/things/deemex",
    title: "Deemex",
    description: "dmx interface with midi to dmx and enttec emulation mode",
    thumbnail: deemexThumbnail,
    thumbnailAlt: "Deemex interface",
    Component: Deemex,
  },
  {
    slug: "esrever",
    name: "esrever",
    destination: "/things/esrever",
    title: "esrever",
    description: "audio plugin that simply reverses the audio signal",
    thumbnail: esreverThumbnail,
    thumbnailAlt: "Esrever plugin interface",
    Component: Esrever,
  },
  {
    slug: "byodmcse",
    name: "BYODMCSE",
    destination: "/things/byodmcse",
    title: "BYODMCSE, Bring Your Own Device Multi-Channel Sound Experience",
    description: "build your own device multi channel sound experience",
    thumbnail: byodmcseThumbnail,
    thumbnailAlt: "BYODMCSE, Midge, and Ableton Live running together",
    Component: BYODMCSE,
  },
  {
    slug: "gsc",
    name: "Grantler Stage Control",
    destination: "/things/gsc",
    title: "Grantler Stage Control",
    description:
      "cross platform, cue based stage control software for theater productions",
    thumbnail: gscThumbnail,
    thumbnailAlt: "Grantler Stage Control cue editor",
    Component: GSC,
  },
  {
    slug: "fernbedienung",
    name: "Fernbedienung",
    destination: "/things/fernbedienung",
    title: "Fernbedienung",
    description: "remote control app for bitwig",
    thumbnail: fernbedienungThumbnail,
    thumbnailAlt: "Fernbedienung remote-control app",
    Component: Fernbedienung,
  },
  {
    slug: "wd3000",
    name: "WD3000",
    destination: "/things/wd3000",
    title: "WD3000",
    description:
      "wire desk for monitoring and composing osc, art-net, tuio, midi, and mqtt",
    thumbnail: wd3000Thumbnail,
    thumbnailAlt: "WD3000 overview",
    Component: WD3000,
  },
  {
    slug: "spielerei",
    name: "Spielerei",
    destination: "/things/spielerei",
    title: "Spielerei",
    description: "c++ creative coding toolkit for interactive exhibits",
    thumbnail: spielereiThumbnail,
    thumbnailAlt: "Spielerei WebGPU render output",
    Component: Spielerei,
  },
];

export const getThingBySlug = (slug?: string) =>
  slug ? things.find((thing) => thing.slug === slug) : undefined;
