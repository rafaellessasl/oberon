import { EmailProps } from '../entity/Email'

export default interface EmailRepository {
  validateEmail(email: EmailProps): Promise<boolean>
  verifyBouncedEmail(email: EmailProps): Promise<boolean>
}
