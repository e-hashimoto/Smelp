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
        } = req.body;

        console.log(req.body, "asl;dfjal;skdfjlaks;dfjkl;asdjfakl;dsjfkl;sad");

        const gym = await db.Gym.build({
            title,
            location,
            description,
            brandId,
    });

    if (gym) {
        await gym.save()
        return res.json(gym);
    };
});

router.get('/:id(\\d+)', async(req, res) => {
    const id = parseInt(req.params.id, 10);
    // console.log(gymId, "this should be a number");
    // const {
    //     title,
    //     location,
    //     description,
    //     brandId
    // } = res.body
    const gym = await db.Gym.findOne({
        where: { id },
        include: [
            {
                title,
                location,
                description,
                brandId
            }
        ]
    });

    // if (!gym) res.redirect('/404');

    return res.json(gym);
});

router.patch(
    '/:id(\\d+)',
    gymValidations.validateUpdate,
    async (req, res) => {
        const gym = await db.Gym.findByPk(req.params.gymId);

        gym.title = req.body.title;
        gym.location = req.body.location;
        gym.description = req.body.description;

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

    }
);

module.exports = router;
