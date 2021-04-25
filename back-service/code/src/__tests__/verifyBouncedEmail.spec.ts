import VerifyBouncedEmail from '~/core/usecases/VerifyBouncedEmail'
import EmailRepositoryImpl from '~/infra/repository/EmailRepositoryImpl'
test('Should verify an email bounce', async () => {
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

  const emailRepository = new EmailRepositoryImpl()
  const verifyBouncedEmail = new VerifyBouncedEmail(emailRepository)
  const result = await verifyBouncedEmail.execute(email)

  expect(result).toBe(true)
})
