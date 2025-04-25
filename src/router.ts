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
router.post("/product", validateRequest(createProductSchema), (req, res) => {
  const { name } = req.body;
  const belongsToId = ((req as any).user as jwt.JwtPayload).id;

  // Simulate creating a product
  res.json({
    message: `Product ${name} which belongs to ${belongsToId} created`,
    belongsToId,
    name,
  });
});
router.delete("/product/:id", () => {});

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
