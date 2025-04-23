import { ZodSchema } from "zod";

export const validateRequest = (schema: ZodSchema<any>) => {
  return (req: any, res: any, next: any) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        message: "Invalid request data",
        errors: result.error.errors,
      });
    }

    req.body = result.data;
    next();
  };
};
