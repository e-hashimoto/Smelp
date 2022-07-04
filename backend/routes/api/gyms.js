
const express = require('express');
const router = express.Router();
const db = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');
const { validationResult, check } = require('express-validator');

const gymValidations = [
    check('title')
        .notEmpty()
        .withMessage('Cannot be empty')
        .exists({ checkFalsy: true })
        .withMessage('Gym must be unique')
        .isLength({ max: 55 })
        .withMessage('Gym title cannot be more than 55 characters long'),
    check('location')
        .notEmpty()
        .withMessage('Must provide a location')
        .isLength({ max: 64 })
        .withMessage('Location cannot be more than 64 characters long'),
    check('description')
        .notEmpty()
        .withMessage('Please describe this gym')
        .isLength({ max: 1024 })
        .withMessage('Thanks for sharing, but no more than 1024 characters'),
    check('brandId')
        .exists({ checkFalsy: true || false })
];

const reviewValidations = [
    check('gymId')
        .exists({ checkFalsy: true }),
    check('userId')
        .exists({ checkFalsy: true }),
    check('title')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a title for your review.')
        .isLength({ max: 50 })
        .withMessage('Title cannot be longer than 50 characters.'),
    check('rating')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a rating for your review.'),
    check('description')
        .exists({ checkFalsy: true })
        .withMessage('Please tell us about your experience.')
        .isLength({ max: 500 })
        .withMessage('Please keep your review no longer than 500 characters.')
]

router.get('/', async(req, res) => {
    const allGyms = await db.Gym.findAll();
    return res.json(allGyms);
});

router.post(
    '/',
    gymValidations,
    handleValidationErrors,
    async(req, res) => {
        console.log('           ', 'working')
        const {
            title,
            location,
            description,
            brandId,
            userId
        } = req.body;

        const gym = await db.Gym.build({
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
    console.log('What is so different from this one?', gymId)
    const gym = await db.Gym.findByPk(gymId);
    if (gym) {
        return res.json({gym})
    }
});

router.patch(
    '/:id(\\d+)',
    gymValidations,
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
        const id = req.params.id;
        console.log(id, 'This is the id of something.')
        const gym = await db.Gym.findByPk(
            id
        );


        if (gym) {
            await gym.destroy();
            return res.json({ message: 'Gym successfully deleted.'});
        }
    }
);

router.get(
    '/:id(\\d+)/reviews',
    async(req, res) => {
        const id = parseInt(req.params.id, 10);
        console.log(id, '--------------');
        const reviews = await db.Review.findAll({
            where: { gymId: id },
            // include: db.User
        });
        console.log(reviews, 'We should see plenty of reviews here!!!')
        return res.json(reviews);
    }
);

router.post(
    '/:id(\\d+)/reviews',
    reviewValidations,
    async(req, res) => {
        const { gymId, userId, title, rating, description } = req.body;
        const reviewObj = await db.Review.create({
            gymId,
            userId,
            title,
            rating,
            description
        });
        const findUser = await db.User.findByPk(userId);

        reviewObj.dataValues['User']=findUser.dataValues

        return res.json(reviewObj);
    }
);

router.delete(
    '/:id(\\d+)/reviews/:reviewId(\\d+)',
    async(req, res) => {
        const reviewId = parseInt(req.params.reviewId, 10);
        const review = await db.Review.findByPk(reviewId);
        if (!review) {
            return res.status(404).json({
                message: 'Review not found',
            });
        }
        await review.destroy();
        return res.json({ message: 'Review deleted!' });
    }
);

module.exports = router;
