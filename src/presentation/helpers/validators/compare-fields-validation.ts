import { InvalidParamError } from '../../errors'
import { Validation } from './validation'

export class CompareFieldsValidation implements Validation {
  constructor (
    private readonly fieldName: string,
    private readonly fieldToCompareName: string
  ) {}

  validate (data: any): Error {
    if (this.fieldName !== this.fieldToCompareName) {
      return new InvalidParamError(this.fieldToCompareName)
    }
  }
}
