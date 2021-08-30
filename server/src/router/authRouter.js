/*
const { Router } = require('express');
const authRouter = Router();
const validateBody = require('../middlewares/validateBody');
const ValidationSchemas = require('../validationSchemes');
const AuthController = require('../controllers/authController');


authRouter.post(
  '/login',
  validateBody(ValidationSchemas.loginSchem),
  AuthController.login
);

authRouter.post(
  '/signup',
  validateBody(ValidationSchemas.registrationSchem),
  AuthController.signUp
);

authRouter.post('/refresh', AuthController.refresh);

module.exports = authRouter;
*/