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
    id: "nime-26-paper",
    name: "Paper presentation at NIME\u00A026",
    when: "26.6.2026",
    where: "NIME 26",
    tagline:
      "Turntangilism: Enhancing traditional Turntable Setups with Tangible Controls for Digital Sequencing and Live Sampling",
    url: "https://nime2026.org/proceedings/215.html",
  },
  {
    id: "nime-26-workshop",
    name: "Workshop at NIME\u00A026",
    when: "23.6.2026",
    where: "NIME 26",
    tagline:
      "Zero-Code Rapid Prototyping of Wireless MIDI Devices with ESP-NOW MIDI",
    url: "https://nime2026.org/proceedings/667.html",
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
