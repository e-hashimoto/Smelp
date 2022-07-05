const express = require('express');
const router = express.Router();
const db = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');
const brandValidations = require('../../utils/brand');
const { validationResult } = require('express-validator');

router.get('/', async(req, res) => {
    const allBrands = await db.Brands.findAll();
    return res.json(allBrands);
});

router.get('/:id(\\d+)', async(req, res) => {
    const brandId = parseInt(req.params.id, 10);
    console.log("This should be a number!", brandId);
    const brand = await db.Brands.findByPk(brandId);
    if (brand) {
        return res.json({brand})
    }
});

router.post(
    '/',
    brandValidations.validateCreate,
    handleValidationErrors,
    async(req, res) => {
        const {
            name,
            country,
            description,
            notableAthletes,
            userId
        } = req.body;

        const brand = await db.Brands.create({
            name,
            country,
            description,
            notableAthletes,
            userId
        });

        if (brand) {
            await brand.save()
            return res.json(brand)
        };
    }
)


module.exports = router;
