"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VerifyBouncedEmail {
    constructor(emailRepository) {
        this.emailRepository = emailRepository;
    }
    async execute(email) {
        return await this.emailRepository.verifyBouncedEmail(email);
    }
}
exports.default = VerifyBouncedEmail;
//# sourceMappingURL=VerifyBouncedEmail.js.map