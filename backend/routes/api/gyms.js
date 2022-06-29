const express = require('express');
// const asyncHandler = requrie('express-async-handler');

const router = express.Router();
const db = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');

const { check } = require("express-validator");

router.get('/', async(req, res) => {
    const allGyms = await db.Gym.findAll();
    return res.json(allGyms);
});

router.post('/', async(req, res) => {
    const {
        title,
        location,
        description,
        brandId
    } = req.body;

    const gym = db.Gym.build({
        title,
        location,
        description,
        brandId,
        userId: res.locals.user.id
    });

    const validatorErrors = handleValidationErrors(req);

    if (validatorErrors.isEmpty()) {
        await gym.save();
        res.redirect(`/gyms/${gym.id}`);
    } else {
        const errors = validatorErrors.array().map((error) => error.msg);

    }
});

router.get('/:gymId(\\d+)', async(req, res) => {
    const gymId = parseInt(req.params.gymId, 10);
    const gym = await db.Gym.findByPk(gymId);

    if (!gym) res.redirect('/404');

    res.render();
});

router.put(
    '/:id',

);

router.delete(
    '/:id',
);

module.exports = router;
