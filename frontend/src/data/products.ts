// frontend/src/data/products.ts
import bouteillePlate from "../assets/bouteille_plate.jpg";
import bouteilleGazeuse from "../assets/bouteille_gaz.jpg";

export type Product = {
  id: string;
  status: "available" | "soon";
  title: string;
  type: "Plate" | "Gazeuse";
  volume: string;
  packaging: string;
  image?: string;
  shopUrl?: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "ventadour-1l-plate",
    status: "available",
    title: "Ventadour 1L",
    type: "Plate",
    volume: "1 L",
    packaging: "Verre consigné · casier x12",
    image: bouteillePlate,
    shopUrl: "https://boutique.sourcesdupestrin.fr"
  },
  {
    id: "ventadour-1l-gazeuse",
    status: "available",
    title: "Ventadour 1L",
    type: "Gazeuse",
    volume: "1 L",
    packaging: "Verre consigné · casier x12",
    image: bouteilleGazeuse,
    shopUrl: "https://boutique.sourcesdupestrin.fr"
  },
  {
    id: "ventadour-0_5l-plate",
    status: "soon",
    title: "Ventadour",
    type: "Plate",
    volume: "0,5 L / 33 cl",
    packaging: "Bientôt disponibles"
  },
  {
    id: "ventadour-0_5l-gazeuse",
    status: "soon",
    title: "Ventadour",
    type: "Gazeuse",
    volume: "0,5 L / 33 cl",
    packaging: "Bientôt disponibles"
  }
];
