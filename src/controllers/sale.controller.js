import prisma from "../prisma.js";

export const createSale = async (req, res) => {
  const { items, paidAmount, paymentMethod, customerId } = req.body;

  try {
    // tính tổng tiền
    const totalAmount = items.reduce(
      (sum, i) => sum + i.quantity * i.unitPrice,
      0,
    );

    const debtAmount = totalAmount - (paidAmount || 0);

    let status = "UNPAID";
    if (paidAmount >= totalAmount) status = "PAID";
    else if (paidAmount > 0) status = "PARTIAL";

    const sale = await prisma.sale.create({
      data: {
        totalAmount,
        paidAmount: paidAmount || 0,
        debtAmount,
        status,
        paymentMethod,
        customerId,
        items: {
          create: items.map((i) => ({
            productId: i.productId,
            quantity: i.quantity,
            unitPrice: i.unitPrice,
            total: i.quantity * i.unitPrice,
          })),
        },
      },
      include: { items: true },
    });

    // trừ tồn kho
    for (const i of items) {
      await prisma.product.update({
        where: { id: i.productId },
        data: { stockQuantity: { decrement: i.quantity } },
      });
    }

    res.json(sale);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getSales = async (req, res) => {
  const sales = await prisma.sale.findMany({
    include: {
      customer: true,
      items: { include: { product: true } },
    },
    orderBy: { createdAt: "desc" },
  });
  res.json(sales);
};

export const getDebts = async (req, res) => {
  const sales = await prisma.sale.findMany({
    where: { status: { not: "PAID" } },
    include: { customer: true },
  });
  res.json(sales);
};
