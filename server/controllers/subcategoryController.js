const Subcategory = require("../models/subcategory");
const Product = require("../models/product")
const slugify = require("slugify");

exports.create = async (req, res) => {
  try {
    const { name, parent } = req.body;
    res.json(
      await new Subcategory({ name, parent, slug: slugify(name) }).save()
    );
  } catch (err) {
    res.status(400).send("Create subcategory failed");
  }
};

exports.list = async (req, res) =>
  res.json(await Subcategory.find({}).sort({ createdAt: -1 }).exec());

exports.read = async (req, res) => {
  let subcategory = await Subcategory.findOne({ slug: req.params.slug }).exec();
  const products = await Product.find({ subs: subcategory })
    .populate("category")
    .exec();
  res.json(subcategory, products);
};

exports.update = async (req, res) => {
  const { name, parent } = req.body;
  try {
    const updated = await Subcategory.findOneAndUpdate(
      { slug: req.params.slug },
      { name, parent, slug: slugify(name) },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).send("update subcategory failed");
  }
};

exports.remove = async (req, res) => {
  try {
    const deleted = await Subcategory.findOneAndDelete({
      slug: req.params.slug,
    });
    res.json(deleted);
  } catch (err) {
    res.status(400).send("delete subcategory failed");
  }
};
