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
  size: { width: number; height: number }
  width: string
}

export const WORK_ITEMS: WorkItem[] = [
  {
    image: img1,
    title: "Drift",
    category: "Art Direction",
    size: { width: 600, height: 375 },
    width: "25vw",
  },
  {
    image: img2,
    title: "Monolith",
    category: "Editorial",
    size: { width: 600, height: 960 },
    width: "23vw",
  },
  {
    image: img3,
    title: "Harbour",
    category: "Photography",
    size: { width: 600, height: 375 },
    width: "25vw",
  },
  {
    image: img4,
    title: "Framed",
    category: "Branding",
    size: { width: 600, height: 960 },
    width: "23vw",
  },
  {
    image: img5,
    title: "Current",
    category: "Art Direction",
    size: { width: 600, height: 375 },
    width: "25vw",
  },
  {
    image: img6,
    title: "Stack",
    category: "Editorial",
    size: { width: 600, height: 375 },
    width: "25vw",
  },
  {
    image: img7,
    title: "Slope",
    category: "Photography",
    size: { width: 600, height: 375 },
    width: "25vw",
  },
  {
    image: img8,
    title: "Grain",
    category: "Branding",
    size: { width: 600, height: 375 },
    width: "25vw",
  },
  {
    image: img9,
    title: "Tide",
    category: "Editorial",
    size: { width: 600, height: 960 },
    width: "23vw",
  },
]
