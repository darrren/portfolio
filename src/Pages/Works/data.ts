import img1 from "./images/494075c8-51f2-4622-ac95-d3e324348470_Archive+5.jpg"
import img2 from "./images/319573c1-57da-46d8-957f-dc3248f480ae_Archive+3.jpg"
import img3 from "./images/12ab7c1f-872e-4405-a735-8420ec27e335_Archive+2.jpg"
import img4 from "./images/29df8470-343b-4b24-b03a-599af96500c2_Archive+8.jpg"
import img5 from "./images/39e03b00-81fc-4d6f-9458-9aa65fb1099c_Archive+11.jpg"
import img6 from "./images/a8ca3e74-c9b8-43b4-a029-b5b6c0437089_Archive+9.jpg"
import img7 from "./images/af48631e-945b-4fcf-a303-61f9fa7b7303_Archive+4.jpg"
import img8 from "./images/fb1d2cae-d2c2-4419-8b0a-e6f9740f6ff7_Archive+12.jpg"
import img9 from "./images/fed4b12d-c34b-4588-81cd-6f2e28fdecd7_Archive+6.jpg"

export interface WorkItem {
  image: string
  title: string
  category: string
  description: string
  skills: string[]
  size: { width: number; height: number }
}

export const WORK_ITEMS: WorkItem[] = [
  {
    image: img1,
    title: "Drift",
    category: "Art Direction",
    description:
      "A visual study of motion and stillness, exploring how layered gradients and offset geometry can suggest a sense of drifting through space.",
    skills: ["Color Theory", "Typography", "Layout"],
    size: { width: 600, height: 375 }
  },
  {
    image: img2,
    title: "Monolith",
    category: "Editorial",
    description:
      "An editorial system built around a single bold structural element, using restraint and sharp contrast to frame a long-form reading experience.",
    skills: ["Editorial Design", "Grid Systems", "Art Direction"],
    size: { width: 600, height: 960 }
  },
  {
    image: img3,
    title: "Harbour",
    category: "Photography",
    description:
      "A documentary series capturing the quiet rhythm of waterfront life at golden hour, graded to keep the palette warm and grounded.",
    skills: ["Photography", "Color Grading", "Retouching"],
    size: { width: 600, height: 375 }
  },
  {
    image: img4,
    title: "Framed",
    category: "Branding",
    description:
      "A brand identity that treats every surface as a frame within a frame, giving a coherent system across print and digital touchpoints.",
    skills: ["Identity", "Brand Guidelines", "Print"],
    size: { width: 600, height: 960 }
  },
  {
    image: img5,
    title: "Current",
    category: "Art Direction",
    description:
      "An exploration of flow and energy, translating the movement of water into a graphic language of flowing lines and rich contrast.",
    skills: ["Concept", "Motion", "Art Direction"],
    size: { width: 600, height: 375 }
  },
  {
    image: img6,
    title: "Stack",
    category: "Editorial",
    description:
      "A modular editorial approach where type and image stack cleanly on strong horizontal baselines, built for flexible reuse across issues.",
    skills: ["Editorial Design", "Typesetting", "Systems"],
    size: { width: 600, height: 375 }
  },
  {
    image: img7,
    title: "Slope",
    category: "Photography",
    description:
      "A small photo essay on architecture and perspective, catching the interplay between hard shadows and soft evening light.",
    skills: ["Photography", "Composition", "Curation"],
    size: { width: 600, height: 375 }
  },
  {
    image: img8,
    title: "Grain",
    category: "Branding",
    description:
      "A tactile brand experiment built around film grain, imperfect marks and warm paper tones, favouring character over polish.",
    skills: ["Identity", "Packaging", "Texture"],
    size: { width: 600, height: 375 }
  },
  {
    image: img9,
    title: "Tide",
    category: "Editorial",
    description:
      "A long-form feature on coastal communities, pairing expansive field photography with an unhurried, spacious typographic voice.",
    skills: ["Editorial Design", "Photography", "Storytelling"],
    size: { width: 600, height: 960 }
  },
]
