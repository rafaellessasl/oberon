"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ValidateEmail {
    constructor(emailRepository) {
        this.emailRepository = emailRepository;
    }
    async execute(email) {
        return await this.emailRepository.validateEmail(email);
    }
}
exports.default = ValidateEmail;
//# sourceMappingURL=ValidateEmail.js.map