import prisma from "../prisma.js";

export const createProduct = async (req, res) => {
  const { productId, name, price, productImage, stockQuantity } = req.body;

  try {
    const product = await prisma.product.create({
      data: {
        productId,
        name,
        price,
        productImage,
        stockQuantity,
      },
    });
    res.json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getProducts = async (req, res) => {
  const products = await prisma.product.findMany({
    where: { isActive: true },
  });
  res.json(products);
};

export const updateStock = async (req, res) => {
  const { id } = req.params;
  const { stockQuantity } = req.body;

  const product = await prisma.product.update({
    where: { id: Number(id) },
    data: { stockQuantity },
  });

  res.json(product);
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  await prisma.product.update({
    where: { id: Number(id) },
    data: { isActive: false },
  });
  res.json({ message: "Sản phẩm đã được xóa thành công" });
};
