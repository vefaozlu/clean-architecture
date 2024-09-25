import Joi from 'joi';

const userSchema = Joi.object({
    id: Joi.string(),
    fullName: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string(),
});

export default userSchema;