const express = require('express');
// const asyncHandler = requrie('express-async-handler');

const router = express.Router();
const db = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');

const { check } = require("express-validator");

router.get('/gyms', async(req, res) => {
    const allGyms = await db.Gym.findAll();
    return res.json(allGyms);
});

module.exports = router;
