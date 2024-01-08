    // import { db } from "../Models/index.js";
    const Product = db.Products;

    // 1. Create new products
    const addProducts = async (req, res) => {
        let info = {
            name: req.body.name
        };

        try {
            const product = await Product.create(info);
            res.status(200).send(product);
        } catch (error) {
            console.error("Error creating Product:", error);
            res.status(500).send("Internal Server Error");
        }
    };
    // 2. get all products
    const getAllProducts= async (req, res) => {
        let product = await Product.findAll({});
        res.status(200).send(product);
    }

    // 3. get single product
    const getOneProduct = async (req, res) => {
        let id = req.params.id;
        let product = await Product.findOne({ where: { id: id } });
        res.status(200).send(product);
    }

    // 4. update product
    const updateProduct = async (req, res) => {
        let id = req.params.id;
        const product = await Product.update(req.body, { where: { id: id } });
        res.status(200).send(product);
    }

    // 5. delete product
    const deleteProduct = async (req, res) => {
        let id = req.params.id;
        await Product.destroy({ where: { id: id } });
        res.status(200).send('Product deleted');
    }

    export {
        addProducts,
        getAllProducts,
        getOneProduct,
        updateProduct,
        deleteProduct
    };
