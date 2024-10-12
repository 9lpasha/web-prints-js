import {TranslatorNode} from 'src/Node/types';
import {PromiseMonad} from 'src/types/global';
import {ValidatorFactory} from 'src/Validator/Validator';
import {TranslatorEngine, TranslatorResult} from './types';
import {TranslatorSyncEngine} from './engines/TranslatorSyncEngine';

export function TranslatorFactory(engine: TranslatorEngine = new TranslatorSyncEngine(ValidatorFactory())) {
  return new Translator(engine);
}

export class Translator implements TranslatorEngine {
  protected engine: TranslatorEngine;

  constructor(engine: TranslatorEngine) {
    this.engine = engine;
  }

  translate(nodes: TranslatorNode[]): PromiseMonad<TranslatorResult> {
    return this.engine.translate(nodes);
  }
}
