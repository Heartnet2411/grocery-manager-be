import { prisma } from "../prismaClient.js";

exports.createCustomer = async (req, res) => {
  const { name, phone, note } = req.body;

  const customer = await prisma.customer.create({
    data: { name, phone, note },
  });

  res.json(customer);
};

exports.getCustomers = async (req, res) => {
  const customers = await prisma.customer.findMany();
  res.json(customers);
};
