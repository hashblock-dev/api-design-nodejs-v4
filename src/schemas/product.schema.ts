import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().min(1, "Product name is required"),
});

export type CreateProductSchema = z.infer<typeof createProductSchema>;

export const updateProductSchema = z.object({
  name: z.string().min(1, "Product name is required"),
});

export type UpdateProductSchema = z.infer<typeof updateProductSchema>;
