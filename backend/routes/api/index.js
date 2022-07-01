const router = require('express').Router();
const sessionRouter = require('./session');
const usersRouter = require('./users');
const gymsRouter = require('./gyms');
const racketsRouter = require('./rackets');
const atheletesRouter = require('./athletes');
const brandsRouter = require('./brands');

const { handleValidationErrors } = require('../../utils/validation');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/gyms', gymsRouter);

router.use('/rackets', racketsRouter);

router.use('/brands', brandsRouter);

router.use('/athletes', atheletesRouter);

router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});

router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
});

// GET /api/set-token-cookie
const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
router.get('/set-token-cookie', asyncHandler(async (_req, res) => {
  const user = await User.findOne({
      where: {
        username: 'Demo-lition'
      }
    });
  setTokenCookie(res, user);
  return res.json({ user });
}));

// GET /api/restore-user
const { restoreUser } = require('../../utils/auth.js');
router.get(
  '/restore-user',
  restoreUser,
  (req, res) => {
    return res.json(req.user);
  }
);

// GET /api/require-auth
const { requireAuth } = require('../../utils/auth.js');
router.get(
  '/require-auth',
  requireAuth,
  (req, res) => {
    return res.json(req.user);
  }
);
module.exports = router;
