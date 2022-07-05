const { check } = require('express-validator');
const { handleValidationErrors } = require('./validation');

const name = check('name')
    .notEmpty()
    .withMessage('Cannot be empty')
    .exists({ checkFalsy: true })
    .withMessage('Must be a new brand')
    .isLength({ max: 30 })
    .withMessage('Brand name cannot be longer than 30 characters')
const country = check('country')
    .notEmpty()
    .withMessage('Please submit a country')
    .isLength({ max: 50 })
    .withMessage('Country name cannot be longer than 50 characters')
const description = check('description')
    .notEmpty()
    .withMessage('Please provide a description about the brand')
    .isLength({ max: 512 })
    .withMessage('Description cannot be longer than 512 characters')
const notableAthletes = check('notableAthletes')
    .notEmpty()
    .withMessage('Every brand has a sponsored athlete... right?')
    .isLength()
    .withMessage('But a brand cannot quite sponsor just about near everyone')
const userId = check('userId')
    .isEmpty()
    .withMessage('Please log in to post a brand')

exports.validateCreate = [
    name,
    country,
    description,
    notableAthletes,
    userId,
    handleValidationErrors
]

exports.validateUpdate = [
    name,
    country,
    description,
    notableAthletes,
    userId,
    handleValidationErrors
]
