import { body } from 'express-validator';

const loginDto = [
  body('email')
    .isEmail()
    .withMessage('Email is invalid')
    .exists({ values: 'falsy' })
    .withMessage('Email is required')
    .isLength({ max: 30 })
    .withMessage('Email max length is 30 characters')
    .trim(),
  body('password')
    .exists({ values: 'falsy' })
    .withMessage('Password is required')
    .isLength({ max: 12, min: 5 })
    .withMessage('Password must be between 12 to 5 characters')
    .trim(),
];

export default loginDto;
