import { InvalidParamError } from '../../errors'
import { CompareFieldsValidation } from './compare-fields-validation'

const makeSut = (): CompareFieldsValidation => {
  return new CompareFieldsValidation('field', 'fieldToCompare')
}

describe('Compare fields validation', () => {
  it('should return a InvalidParamError if validation fails', () => {
    const sut = makeSut()

    const error = sut.validate({
      field: 'any_value',
      fieldToCompare: 'another_value'
    })
    expect(error).toEqual(new InvalidParamError('fieldToCompare'))
  })

  it('should not return any error if validation succeeds', () => {
    const sut = makeSut()

    const error = sut.validate({
      field: 'same_value',
      fieldToCompare: 'same_value'
    })

    expect(error).toBeFalsy()
  })
})
