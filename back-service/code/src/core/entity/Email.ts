export interface EmailProps {
  sequence: number;
  source: string;
  subject: string;
  body: string;
  from: string;
  to: string;
  typeEmail: string;
  codeAdm: number;
  cc?: string;
  bcc?: string;
}

export default class Email {
  email: EmailProps;

  constructor (email: EmailProps) {
    this.email = email
  }

  getEmail () {
    return this.email
  }
}
