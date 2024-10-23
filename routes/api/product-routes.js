const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// Get all products, including associated Category and Tag data
router.get('/', async (req, res) => {
  try {
    const productData = await Product.findAll({
      include: [{ model: Category }, { model: Tag, through: ProductTag }],
    });
    res.status(200).json(productData);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Get one product by its ID, including associated Category and Tag data
router.get('/:id', async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id, {
      include: [{ model: Category }, { model: Tag, through: ProductTag }],
    });
    if (!productData) {
      res.status(404).json({ message: 'No product found with this id!' });
      return;
    }
    res.status(200).json(productData);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Create a new product
router.post('/', async (req, res) => {
  const { product_name, price, stock, tagIds } = req.body;

  // Check for required fields
  if (!product_name || !price || !stock) {
    return res.status(400).json({ message: 'Please provide product name, price, and stock.' });
  }

  try {
    // Create new product
    const newProduct = await Product.create({
      product_name,
      price,
      stock,
    });

    // If there are tagIds, create associations in ProductTag
    if (tagIds && tagIds.length) {
      const productTagIdArr = tagIds.map((tag_id) => ({
        product_id: newProduct.id,
        tag_id,
      }));
      await ProductTag.bulkCreate(productTagIdArr);
    }

    res.status(200).json(newProduct);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Failed to create product.', error: err });
  }
});

// Update an existing product
router.put('/:id', async (req, res) => {
  try {
    // Update product data
    const updatedProduct = await Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    // If product not found, return 404
    if (!updatedProduct[0]) {
      res.status(404).json({ message: 'No product found with this id!' });
      return;
    }

    // If there are tagIds, update associations in ProductTag
    if (req.body.tagIds && req.body.tagIds.length) {
      const productTags = await ProductTag.findAll({ where: { product_id: req.params.id } });

      // Extract current tag IDs
      const productTagIds = productTags.map(({ tag_id }) => tag_id);

      // Filter new tag IDs
      const newProductTags = req.body.tagIds
        .filter((tag_id) => !productTagIds.includes(tag_id))
        .map((tag_id) => ({
          product_id: req.params.id,
          tag_id,
        }));

      // Filter tags to remove
      const productTagsToRemove = productTags
        .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
        .map(({ id }) => id);

      // Update ProductTag associations
      await Promise.all([
        ProductTag.destroy({ where: { id: productTagsToRemove } }),
        ProductTag.bulkCreate(newProductTags),
      ]);
    }

    res.status(200).json({ message: 'Product updated successfully!' });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Failed to update product.', error: err });
  }
});

// Delete one product by its ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedProduct = await Product.destroy({
      where: { id: req.params.id },
    });

    // If product not found, return 404
    if (!deletedProduct) {
      res.status(404).json({ message: 'No product found with this id!' });
      return;
    }

    res.status(200).json({ message: 'Product deleted successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to delete product.', error: err });
  }
});

module.exports = router;
