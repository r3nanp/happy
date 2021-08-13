import Joi from 'joi'

export type FieldErrors = {
  [key: string]: string
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
  images: Joi.array()
    .items(Joi.object({ path: Joi.string().required() }))
    .required()
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
