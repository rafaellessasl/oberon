import { EmailProps } from '../entity/Email'
import EmailRepository from '../repository/EmailRepositoty'

export default class ValidateEmail {
  emailRepository: EmailRepository;
  constructor (emailRepository: EmailRepository) {
    this.emailRepository = emailRepository
  }

  async execute (email: EmailProps) {
    return await this.emailRepository.validateEmail(email)
  }
}
