import ValidateEmail from '~/core/usecases/ValidateEmail'
import EmailRepositoryImpl from '~/infra/repository/EmailRepositoryImpl'

describe('Validate Email', () => {
  const email = {
    sequence: 1,
    source: 'teste',
    subject: 'teste',
    body: 'teste',
    from: 'teste',
    to: 'rafael.lessa@superlogica.com',
    typeEmail: 'test',
    codeAdm: 1
  }
  beforeAll(() => {
  })

  it('Should be validate email', async () => {
    const emailRepository = new EmailRepositoryImpl()
    const validateEmail = new ValidateEmail(emailRepository)
    const validate = await validateEmail.execute(email)
    expect(validate).toBe(true)
  })
})
