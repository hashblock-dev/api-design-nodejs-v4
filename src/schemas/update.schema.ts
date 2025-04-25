import { z } from "zod";

export const createUpdateSchema = z.object({
  title: z.string().min(1, "Update title is required"),
  body: z.string().min(1, "Update body is required"),
  status: z.enum(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]).optional(),
  version: z.string().min(1, "Version min length is 1").optional(),
  productId: z.string().min(1, "ProductId is required"),
});

export type CreateUpdateSchema = z.infer<typeof createUpdateSchema>;

export const updateUpdateSchema = z.object({
  title: z.string().min(1, "Update title min length is 1").optional(),
  body: z.string().min(1, "Update body min length is 1").optional(),
  status: z.enum(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]).optional(),
  version: z.string().min(1, "Version min length is 1").optional(),
});

export type UpdateUpdateSchema = z.infer<typeof updateUpdateSchema>;
