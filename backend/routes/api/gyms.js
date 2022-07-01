const express = require('express');
// const asyncHandler = require('express-async-handler');

const router = express.Router();
const db = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');
const gymValidations = require('../../utils/gym');
const { validationResult } = require('express-validator');

// const { check } = require("express-validator");

router.get('/', async(req, res) => {
    const allGyms = await db.Gym.findAll();
    return res.json(allGyms);
});

router.post(
    '/',
    gymValidations.validateCreate,
    handleValidationErrors,
    async(req, res) => {
        const {
            title,
            location,
            description,
            brandId,
            userId
        } = req.body;

        const gym = await db.Gym.create({
            title,
            location,
            description,
            brandId,
            userId
    });

    if (gym) {
        await gym.save()
        return res.json(gym);
    };
});

router.get('/:id(\\d+)', async(req, res) => {
    const gymId = parseInt(req.params.id, 10);
    const gym = await db.Gym.findByPk(gymId);
    if (gym) {
        return res.json({gym})
    }
});

router.patch(
    '/:id(\\d+)',
    gymValidations.validateUpdate,
    async (req, res) => {
        const gym = await db.Gym.findByPk(req.params.id);

        gym.title = req.body.title;
        gym.location = req.body.location;
        gym.description = req.body.description;
        gym.brandId = req.body.brandId;
        gym.userId = req.body.userId;

        const validatorErrors = validationResult(req);

        if (validatorErrors.isEmpty()) {
            await gym.save();
            res.status(200);
            res.json({ message: 'Successfully updated!', gym});
        } else {
            const errors = validatorErrors.array().map((error) => error.msg);
            res.status(400);
            res.json({message: 'Failed!', gym, errors});
        }
    }
)

router.delete(
    '/:id',
    async (req, res) => {
        const id = parseInt(req.params.id, 10);
        const gym = await db.Gym.findByPk(
            id
        );


        if (gym) {
            await gym.destroy();
            return res.json({ message: 'Gym successfully deleted.'});
        }
    }
);

module.exports = router;
