import prisma from "../prisma.js";

export const payDebt = async (req, res) => {
  const { saleId, amount, method, note } = req.body;

  const sale = await prisma.sale.findUnique({
    where: { id: saleId },
  });

  if (!sale) return res.status(404).json({ error: "Sale not found" });

  const paidAmount = sale.paidAmount + amount;
  const debtAmount = sale.totalAmount - paidAmount;

  let status = "PARTIAL";
  if (debtAmount <= 0) status = "PAID";

  await prisma.payment.create({
    data: { saleId, amount, method, note },
  });

  const updatedSale = await prisma.sale.update({
    where: { id: saleId },
    data: {
      paidAmount,
      debtAmount: Math.max(0, debtAmount),
      status,
    },
  });

  res.json(updatedSale);
};
