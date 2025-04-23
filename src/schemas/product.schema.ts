import { z } from "zod";

export const updateProductSchema = z.object({
  name: z.string().min(1, "Product name is required"),
});

// Typage automatique si tu veux
export type UpdateProductSchema = z.infer<typeof updateProductSchema>;
