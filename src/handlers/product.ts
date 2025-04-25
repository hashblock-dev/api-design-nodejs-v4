import prisma from "./../db";

export async function getProducts(req: any, res: any) {
  const user = await prisma.user.findUnique({
    where: {
      id: req.user.id,
    },
    include: {
      products: true,
    },
  });

  res.json({ data: user.products });
}

export async function getProduct(req: any, res: any) {
  const product = await prisma.product.findUnique({
    where: {
      id: req.params.id,
      belongsToId: req.user.id,
    },
  });

  res.json({ data: product });
}

export async function createProduct(req: any, res: any) {
  const product = await prisma.product.create({
    data: {
      name: req.body.name,
      belongsToId: req.user.id,
    },
  });

  res.json({ data: product });
}

export async function updateProduct(req: any, res: any) {
  const product = await prisma.product.update({
    where: {
      id: req.params.id,
      belongsToId: req.user.id,
    },
    data: {
      name: req.body.name,
    },
  });

  res.json({ data: product });
}

export async function deleteProduct(req: any, res: any) {
  const product = await prisma.product.delete({
    where: {
      id: req.params.id,
      belongsToId: req.user.id,
    },
  });

  res.json({ data: product });
}
