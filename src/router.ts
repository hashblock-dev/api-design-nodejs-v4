import { Router } from "express";
import { validateRequest } from "./middlewares/validateRequest";
import { updateProductSchema } from "./schemas/product.schema";

const router = Router();

// Define routes for the product resource
router.get("/product", (req, res) => {
  res.json({ message: "Get all products" });
});
router.get("/product/:id", () => {});
router.put("/product/:id", validateRequest(updateProductSchema), (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  // Simulate updating a product
  res.json({ message: `Product ${id} updated`, name });
});
router.post("/product", () => {});
router.delete("/product/:id", () => {});

// Define routes for the update resource
router.get("/update", () => {});
router.get("/update/:id", () => {});
router.put("/update/:id", () => {});
router.post("/update", () => {});
router.delete("/update/:id", () => {});

// Define routes for the update point resource
router.get("/updatepoint", () => {});
router.get("/updatepoint/:id", () => {});
router.put("/updatepoint/:id", () => {});
router.post("/updatepoint", () => {});
router.delete("/updatepoint/:id", () => {});

export default router;
