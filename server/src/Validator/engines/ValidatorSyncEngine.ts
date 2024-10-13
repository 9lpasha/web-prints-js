/* eslint-disable @typescript-eslint/no-unused-vars */
import {TranslatorNode} from 'src/Node/types';
import {ValidatorEngine} from '../types';
import {BaseNodeValidator} from '../validators/BaseNodeValidator';
import {HTMLNodeValidator} from '../validators/HTMLNodeValidator';
import {SyncPromise} from 'src/SyncPromise/SyncPromise';
import {CSSNodeValidator} from '../validators/CSSNodeValidator';

export class ValidatorSyncEngine implements ValidatorEngine {
  baseNodeValidator = new BaseNodeValidator();
  htmlNodeValidator = new HTMLNodeValidator();
  cssNodeValidator = new CSSNodeValidator();

  isNode(node: TranslatorNode): SyncPromise<boolean> {
    return new SyncPromise((res) => {
      res(this.baseNodeValidator.isNode(node));
    });
  }

  isHtmlButtonNode(node: TranslatorNode): SyncPromise<boolean> {
    throw new Error('Method not implemented.');
  }

  isCssNode(node: TranslatorNode): SyncPromise<boolean> {
    throw new Error('Method not implemented.');
  }
}
