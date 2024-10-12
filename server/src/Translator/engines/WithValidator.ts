import {Validator} from 'src/Validator/Validator';

export abstract class WithValidator {
  validator: Validator;

  constructor(validator: Validator) {
    this.validator = validator;
  }
}
