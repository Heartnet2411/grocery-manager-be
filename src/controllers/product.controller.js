exports.getAll = (req, res) => {
  res.json({
    success: true,
    data: [],
  });
};

exports.create = (req, res) => {
  const product = req.body;
  res.status(201).json({
    success: true,
    data: product,
  });
};
