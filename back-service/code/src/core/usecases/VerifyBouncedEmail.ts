import { EmailProps } from './../entity/Email'
import EmailRepository from '~/core/repository/EmailRepositoty'

export default class VerifyBouncedEmail {
  emailRepository: EmailRepository
  constructor (emailRepository: EmailRepository) {
    this.emailRepository = emailRepository
  }

  async execute (email: EmailProps) {
    return await this.emailRepository.verifyBouncedEmail(email)
  }
}
