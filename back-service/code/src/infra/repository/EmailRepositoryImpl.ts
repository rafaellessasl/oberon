import { EmailProps } from '~/core/entity/Email'
import EmailRepository from '~/core/repository/EmailRepositoty'

export default class EmailRepositoryImpl implements EmailRepository {
  async verifyBouncedEmail (email: EmailProps): Promise<boolean> {
    const bounced = [
      {
        email: 'rafael.lessa@superlogica.com'
      }
    ]

    const emailFields = ['to', 'cc', 'bcc']

    for (const field of emailFields) {
      if (email[field]) {
        return await bounced.some((bounce) => bounce.email === email[field])
      }
    }

    return false
  }

  async validateEmail (email: EmailProps): Promise<boolean> {
    email.from.match('<(.*?)>')

    const emailFields = ['to', 'cc', 'bcc']

    for (const field of emailFields) {
      if (email[field]) {
        if (!this.isEmail(email[field])) {
          return false
        }
      }
    }

    return true
  }

  isEmail (email: string): boolean {
    if (email === '' || email === undefined) return false
    const dotCom = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\)?$/i
    const dotComBr = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i

    if (dotCom.test(email) || dotComBr.test(email)) {
      return true
    }

    return false
  }
}
