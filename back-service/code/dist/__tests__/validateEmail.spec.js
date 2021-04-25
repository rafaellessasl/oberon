"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ValidateEmail_1 = __importDefault(require("~/core/usecases/ValidateEmail"));
const EmailRepositoryImpl_1 = __importDefault(require("~/infra/repository/EmailRepositoryImpl"));
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
    };
    beforeAll(() => {
    });
    it('Should be validate email', async () => {
        const emailRepository = new EmailRepositoryImpl_1.default();
        const validateEmail = new ValidateEmail_1.default(emailRepository);
        const validate = await validateEmail.execute(email);
        expect(validate).toBe(true);
    });
});
//# sourceMappingURL=validateEmail.spec.js.map