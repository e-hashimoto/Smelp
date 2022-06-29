const { check } = require('express-validator');
const { handleValidationErrors } = require('./validation');

const title = check('title')
    .notEmpty()
    .withMessage('Cannot be empty')
    .exists({ checkFalsy: true })
    .withMessage('Gym must be unique')
    .isLength({ max: 55 })
    .withMessage('Gym title cannot be more than 55 characters long')
const location = check('location')
    .notEmpty()
    .withMessage('Must provide a location')
    .isLength({ max: 64 })
    .withMessage('Location cannot be more than 64 characters long')
const description = check('description')
    .notEmpty()
    .withMessage('Please describe this gym')
    .isLength({ max: 1024 })
    .withMessage('Thanks for sharing, but no more than 1024 characters')
const brandId = check('brandId')
    .exists({ checkNull: true || undefined })

exports.validateCreate = [
    title,
    location,
    description,
    brandId,
    handleValidationErrors
]

exports.validateUpdate = [
    title,
    location,
    description,
    brandId,
    handleValidationErrors
]
