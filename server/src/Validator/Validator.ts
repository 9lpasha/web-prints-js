import {TranslatorNode} from 'src/Node/types';
import {NodeValidator, ValidatorEngine} from './types';
import {ValidatorSyncEngine} from './engines/ValidatorSyncEngine';
import {PromiseMonad} from 'src/types/global';

export function ValidatorFactory(engine: ValidatorEngine = new ValidatorSyncEngine()) {
  return new Validator(engine);
}

export class Validator implements NodeValidator {
  protected engine: ValidatorEngine;

  constructor(engine: ValidatorEngine) {
    this.engine = engine;
  }

  checkRelationship(toNode: TranslatorNode, fromNode: TranslatorNode, params: unknown) {
    console.log(toNode, fromNode, params);

    return false;
  }

  isNode(node: TranslatorNode): PromiseMonad<boolean> {
    return this.engine.isNode(node);
  }
}
