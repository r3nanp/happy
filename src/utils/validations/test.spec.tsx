import { createOrphanageValidation } from '.'

describe('Validations', () => {
  describe('createOrphanageValidation()', () => {
    it('should validate empty fields', () => {
      const values = {
        name: '',
        about: '',
        instructions: '',
        openingHours: '',
        latitude: 0,
        longitude: 0,
        openOnWeekends: false,
        images: []
      }

      expect(createOrphanageValidation(values)).toMatchObject({
        name: '"name" is not allowed to be empty',
        about: '"about" is not allowed to be empty',
        instructions: '"instructions" is not allowed to be empty',
        openingHours: '"openingHours" is not allowed to be empty'
      })
    })

    it('should return a error name', () => {
      const values = {
        name: 'Tes',
        about: 'This orphanage is a test orphanage',
        instructions: 'This orphanage is a test orphanage',
        openingHours: 'This orphanage is a test orphanage',
        latitude: 0,
        longitude: 0,
        openOnWeekends: false,
        images: []
      }

      expect(createOrphanageValidation(values).name).toMatchInlineSnapshot(
        '"\\"name\\" length must be at least 4 characters long"'
      )
    })
  })
})
