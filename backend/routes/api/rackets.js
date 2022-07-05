const express = require('express');
const router = express.Router();
const db = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');
const { validationResult, check } = require('express-validator');

const racketValidations = [
    check('name')
        .notEmpty()
        .withMessage('Cannot be empty')
        .isLength({ max: 55 })
        .withMessage('The name of the racket cannot be longer than 55 characters'),
    check('brandId')
        .exists({ checkFalsy: true })
        .withMessage('Racket must belong to a brand that exists'),
    check('description')
        .isLength({ max: 512 })
        .withMessage('Please keep the description of the racket to no more than 512 characters.'),
    check('userId')
        .exists({ checkFalsy: true })
        .withMessage('Racket must be associated with a user')
];

router.get('/', async(req, res) => {
    const allRackets = await db.Racket.findAll();
    return res.json(allRackets);
});

router.post('/', racketValidations, handleValidationErrors, async(req, res) => {
    const {
        name,
        brandId,
        description,
        userId
    } = req.body;

    const racket = await db.Racket.build({
        name,
        brandId,
        description,
        userId
    });

    if (racket) {
        await racket.save()
        return res.json(racket);
    };
});

router.get('/:id(\\d+)', async(req, res) => {
    const racketId = parseInt(req.params.id, 10);
    const racket = await db.Racket.findByPk(racketId);
    if (racket) {
        return res.json(racket);
    }
});

router.delete('/:id', async(req, res) => {
    const id = req.params.id;
    const racket = await db.Racket.findByPk(
        id
    );

    if (racket) {
        await racket.destroy();
        return res.json({ message: 'Racket successfully deleted'});
    };
});

module.exports = router;
