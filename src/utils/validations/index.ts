import Joi from 'joi'

export type FieldErrors = {
  [key: string]: string
}

type LoginValues = {
  email: string
  password: string
}

type InputValues = {
  name: string
  about: string
  latitude: number
  longitude: number
  openingHours: string
  instructions: string
  openOnWeekends: boolean
  images: File[]
}

const fieldsValidations = {
  name: Joi.string().min(4).required(),
  about: Joi.string().max(300).required(),
  latitude: Joi.number().required(),
  longitude: Joi.number().required(),
  openingHours: Joi.string().min(4).required(),
  instructions: Joi.string().min(4).required(),
  openOnWeekends: Joi.boolean().required(),
  images: Joi.array().items().required()
}

const loginFieldsValidations = {
  email: Joi.string().min(4).required(),
  password: Joi.string().min(7).required()
}

function getFieldErrors(objError: Joi.ValidationResult) {
  const errors: FieldErrors = {}

  if (objError.error) {
    objError.error.details.forEach(err => {
      errors[err.path.join('.')] = err.message
    })
  }

  return errors
}

export function createOrphanageValidation(values: InputValues) {
  const schema = Joi.object(fieldsValidations)

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

export function loginValidation(values: LoginValues) {
  const schema = Joi.object(loginFieldsValidations)

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}
