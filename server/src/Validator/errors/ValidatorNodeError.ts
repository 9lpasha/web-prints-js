import {InvalidTranslatorNodeProperties, ValidatorErrorTypes} from '../types';

export class ValidatorNodeError extends Error {
  type: ValidatorErrorTypes;
  invalidProperties: InvalidTranslatorNodeProperties;

  constructor(message: string, invalidProperties: InvalidTranslatorNodeProperties, type: ValidatorErrorTypes) {
    super(message);
    this.invalidProperties = invalidProperties;
    this.type = type;
  }
}
