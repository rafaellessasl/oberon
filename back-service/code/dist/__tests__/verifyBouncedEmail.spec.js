"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const VerifyBouncedEmail_1 = __importDefault(require("~/core/usecases/VerifyBouncedEmail"));
const EmailRepositoryImpl_1 = __importDefault(require("~/infra/repository/EmailRepositoryImpl"));
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
    };
    const emailRepository = new EmailRepositoryImpl_1.default();
    const verifyBouncedEmail = new VerifyBouncedEmail_1.default(emailRepository);
    const result = await verifyBouncedEmail.execute(email);
    expect(result).toBe(true);
});
//# sourceMappingURL=verifyBouncedEmail.spec.js.map