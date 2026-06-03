export type EventItem = {
  id: string;
  name: string;
  when: string;
  where: string;
  tagline: string;
  format?: string;
  url?: string;
};

export const events: EventItem[] = [
  {
    id: "nime-26",
    name: "workshop and paper presentation at NIME 26",
    when: "TBA",
    where: "NIME 26",
    tagline: "workshop and paper presentation at NIME 26",
  },
  {
    id: "wireless-midi-workshop",
    name: "Wireless MIDI workshop",
    when: "28.3.26",
    where: "pixelforest",
    tagline:
      "Build wireless MIDI controllers for Postdigital Lutherie & Interactive Exhibitions",
    url: "https://pixel-forest.com/workshops/wireless-midi-for-instruments-and-interactive-exhibits/",
  },
  {
    id: "turntangilism",
    name: "Turntangilism",
    when: "22.9.2026",
    where: "Favoritbar",
    tagline: "Eine postdigitale Erweiterung eines typischen DJ Setups",
    format: "Vortrag und Konzert",
  },
];

export const eventListTitle = (event: EventItem) =>
  `${event.when} · ${event.name}`;

export const getEventById = (id: string) =>
  events.find((event) => event.id === id);
