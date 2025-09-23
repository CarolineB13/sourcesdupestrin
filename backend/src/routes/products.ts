// backend/src/routes/products.ts
import { Router } from 'express';

export type Product = {
  id: string;
  name: string;                 // "Ventadour 1L — Plate"
  packaging?: string;           // "verre consigné" | "canette aluminium"
  pack?: string;                // "x12" | "x20"
  comingSoon?: boolean;         // true => bientôt
  image?: string;
  shopUrl?: string;
};

const router = Router();

// Données de test
const items: Product[] = [
  { id:'ventadour-1l-plate',   name:'Ventadour 1L — Plate',   packaging:'verre consigné', pack:'x12' },
  { id:'ventadour-1l-gaz',     name:'Ventadour 1L — Gazeuse', packaging:'verre consigné', pack:'x12' },
  { id:'ventadour-50cl-plate', name:'Ventadour 0,5L — Plate', packaging:'verre consigné', pack:'x20', comingSoon:true },
  { id:'ventadour-33cl-plate', name:'Ventadour 33cl — Plate', packaging:'canette aluminium', comingSoon:true },
];

router.get('/', (_req, res) => {
  res.json({ items }); // <<<<<< important: objet { items: [...] }
});

export default router;
