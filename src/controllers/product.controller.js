import prisma from "../prisma.js";

export const getProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        id: "desc",
      },
    });

    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    console.error("Get products error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch products",
    });
  }
};
