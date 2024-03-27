import { body } from 'express-validator';

const registerDto = [
  body('firstName')
    .exists({ values: 'falsy' })
    .withMessage('First Name is required')
    .isLength({ max: 10 })
    .withMessage('First name max length is 10 characters')
    .trim(),
  body('lastName')
    .exists({ values: 'falsy' })
    .withMessage('Last Name is required')
    .isLength({ max: 10 })
    .withMessage('Last name max length is 10 characters')
    .trim(),
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

export default registerDto;
