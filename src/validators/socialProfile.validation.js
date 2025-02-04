import Joi from 'joi'


export const socialProfileValidation = (data) => {
    const validation = Joi.object({
        user_id: Joi.number().required(),
        platform:Joi.string().required(),
        user_platform:Joi.string().required()
    })
    return validation.validate(data)
}
