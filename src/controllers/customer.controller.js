import prisma from "../prisma.js";

export const createCustomer = async (req, res) => {
  const { name, phone, note } = req.body;

  const customer = await prisma.customer.create({
    data: { name, phone, note },
  });

  res.json(customer);
};

export const getCustomers = async (req, res) => {
  const customers = await prisma.customer.findMany();
  res.json(customers);
};
