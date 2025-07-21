// ✅ Archivo: factories/HandleFactory.js
import { CMSFactoryInterface } from './CMSFactoryInterface.js';

export class HandleFactory extends CMSFactoryInterface {
  constructor(handler, loggerMessage = '', validator = () => true) {
    super();
    this.handler = handler;
    this.loggerMessage = loggerMessage;
    this.validatorFn = validator;
  }

  createHandler() {
    return this.handler;
  }

  createLogger() {
    return () => {
      if (this.loggerMessage) {
        console.log(this.loggerMessage);
      }
    };
  }

  createValidator() {
    return this.validatorFn;
  }
}
