/* eslint-disable @typescript-eslint/no-unused-vars */
import {TranslatorNode} from 'src/Node/types';
import {ValidatorEngine} from '../types';
import {BaseNodeValidator} from '../validators/BaseNodeValidator';
import {HTMLNodeValidator} from '../validators/HTMLNodeValidator';
import {CSSNodeValidator} from '../validators/CSSNodeValidator';

export class ValidatorAsyncEngine implements ValidatorEngine {
  baseNodeValidator = new BaseNodeValidator();
  htmlNodeValidator = new HTMLNodeValidator();
  cssNodeValidator = new CSSNodeValidator();

  isNode(node: TranslatorNode): Promise<boolean> {
    return new Promise((res) => {
      res(this.baseNodeValidator.isNode(node));
    });
  }

  isHtmlButtonNode(node: TranslatorNode): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  isCssNode(node: TranslatorNode): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
