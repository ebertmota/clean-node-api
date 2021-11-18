import { Authentication, AuthenticationCredentials } from '../../../domain/usecases/authentication'
import { LoadAccountByEmailRepository } from '../../protocols/db/load-account-by-email-repository'

export class DbAuthentication implements Authentication {
  constructor (
    private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository
  ) {}

  async auth ({ email }: AuthenticationCredentials): Promise<string> {
    const account = await this.loadAccountByEmailRepository.load(email)

    if (!account) {
      return null
    }
  }
}
