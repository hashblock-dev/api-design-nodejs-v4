import { Router } from "express";
import jwt from "jsonwebtoken";
import { validateRequest } from "./middlewares/validateRequest";
import {
  createProductSchema,
  updateProductSchema,
} from "./schemas/product.schema";
import {
  createUpdateSchema,
  updateUpdateSchema,
} from "./schemas/update.schema";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "./handlers/product";

const router = Router();

// Define routes for the product resource
router.get("/product", getProducts);
router.get("/product/:id", getProduct);
router.put("/product/:id", validateRequest(updateProductSchema), updateProduct);
router.post("/product", validateRequest(createProductSchema), createProduct);
router.delete("/product/:id", deleteProduct);

// Define routes for the update resource
router.get("/update", () => {});
router.get("/update/:id", () => {});
router.put("/update/:id", validateRequest(updateUpdateSchema), (req, res) => {
  const { title, body, status, version } = req.body;
  const { id: productId } = req.params;

  // TODO: Check that product belongs to the user
  // Simulate updating an update
  res.json({
    message: `Update ${title} ${body} with status: ${status} and version: ${version} based on product ${productId} has been updated`,
    title,
    body,
    status,
    version,
    productId,
  });
});
router.post("/update", validateRequest(createUpdateSchema), (req, res) => {
  const { title, body, status, version, productId } = req.body;

  // TODO: Check that product belongs to the user
  // Simulate updating an update
  res.json({
    message: `Update ${title} ${body} with status: ${status} and version: ${version} based on product ${productId} has been created`,
    title,
    body,
    status,
    version,
    productId,
  });
});
router.delete("/update/:id", () => {});

// Define routes for the update point resource
router.get("/updatepoint", () => {});
router.get("/updatepoint/:id", () => {});
router.put("/updatepoint/:id", () => {});
router.post("/updatepoint", () => {});
router.delete("/updatepoint/:id", () => {});

export default router;
