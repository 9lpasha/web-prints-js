import {TranslatorNode} from 'src/Node/types';
import {ValidatorEngine} from '../types';
import {BaseNodeValidator} from '../validators/BaseNodeValidator';
import {HTMLNodeValidator} from '../validators/HTMLNodeValidator';

export class ValidatorAsyncEngine implements ValidatorEngine {
  baseNodeValidator = new BaseNodeValidator();
  HTMLNodeValidator = new HTMLNodeValidator();

  isNode(node: TranslatorNode): Promise<boolean> {
    return new Promise((res) => {
      res(this.baseNodeValidator.isNode(node));
    });
  }
}
