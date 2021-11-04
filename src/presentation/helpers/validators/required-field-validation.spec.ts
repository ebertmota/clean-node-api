import { MissingParamError } from '../../errors'
import { RequiredFieldValidation } from './required-field-validation'

const makeSut = (): RequiredFieldValidation => {
  return new RequiredFieldValidation('field')
}

describe('Required field validation', () => {
  it('should return a MissingParamError if validation fails', () => {
    const sut = makeSut()

    const error = sut.validate({ name: 'any_name' })
    expect(error).toEqual(new MissingParamError('field'))
  })

  it('should not return any error if validation succeeds', () => {
    const sut = makeSut()

    const error = sut.validate({ field: 'any_field' })
    expect(error).toBeFalsy()
  })
})
