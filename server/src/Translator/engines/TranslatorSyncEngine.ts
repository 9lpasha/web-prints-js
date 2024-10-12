import {TranslatorNode} from 'src/Node/types';
import {TranslatorEngine, TranslatorResult} from '../types';
import {WithValidator} from './WithValidator';
import {PromiseMonad} from 'src/types/global';
import {SyncPromise} from 'src/SyncPromise/SyncPromise';

export class TranslatorSyncEngine extends WithValidator implements TranslatorEngine {
  translate(nodes: TranslatorNode[]): PromiseMonad<TranslatorResult> {
    const promises: PromiseMonad<boolean>[] = [];

    for (const node of nodes) {
      promises.push(this.validator.isNode(node));
    }

    return new SyncPromise<TranslatorResult>((res) => {
      res({
        html: '<div>123</div>',
        css: '.myClass {}',
        js: 'const a = 10;',
      });
    });
  }
}
