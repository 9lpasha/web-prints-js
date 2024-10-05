/* eslint-disable @typescript-eslint/no-unused-vars */
import {SyncPromise} from 'src/SyncPromise/SyncPromise';
import {TranslatorNode} from '../types';
import {PromiseMonad} from 'src/SyncPromise/types';

export enum ValidatorErrorTypes {
  INVALID_NODE = 'INVALID_NODE',
  INVALID_HTML_NODE = 'INVALID_HTML_NODE',
}

type InvalidTranslatorNodeProperties = Partial<Record<keyof TranslatorNode, string>>;

export class ValidatorNodeError extends Error {
  type: ValidatorErrorTypes;
  invalidProperties: InvalidTranslatorNodeProperties;

  constructor(message: string, invalidProperties: InvalidTranslatorNodeProperties, type: ValidatorErrorTypes) {
    super(message);
    this.invalidProperties = invalidProperties;
    this.type = type;
  }
}

export class TranslatorNodeValidator {
  isNode(node: TranslatorNode): node is TranslatorNode {
    const invalidProperties: InvalidTranslatorNodeProperties = {};

    if (typeof node.id !== 'string') invalidProperties.id = 'Invalid id';
    if (typeof node.name !== 'string') invalidProperties.name = 'Invalid name';
    if (typeof node.type !== 'string') invalidProperties.type = 'Invalid type';
    if (typeof node.sourceParams !== 'object') invalidProperties.sourceParams = 'Invalid type';

    if (Object.keys(invalidProperties).length > 0) {
      throw new ValidatorNodeError('Invalid Node', invalidProperties, ValidatorErrorTypes.INVALID_NODE);
    }

    return true;
  }
}

// Либо не наследование либо DI
class TranslatorHTMLNodeValidator {
  isValidButtonElement(node: TranslatorNode) {
    const invalidProperties: InvalidTranslatorNodeProperties = {};

    if (node.prev != null) invalidProperties.prev = 'Invalid prev';
    if (node.next !== null && !Array.isArray(node.next)) invalidProperties.next = 'Invalid next';

    if (node.next.length > 0) {
      for (let i = 0; i < node.next.length; i++) {
        const eventNode = node.next[i];

        if (!{}[eventNode.type]) {
          return 'Invalid next';
        }
      }
    }

    throw new ValidatorNodeError('Invalid Node', invalidProperties, ValidatorErrorTypes.INVALID_HTML_NODE);
  }
}

type PromisifyMethodsReturnType<T> = {
  [K in keyof T]: T[K] extends (...args: infer A) => infer R ? (...args: A) => PromiseMonad<R> : T[K];
};

// Обертка для возвращаемого типа
interface Int {
  isNode(node: TranslatorNode): boolean;
  isValies(s: string): number;
}

// Применяем утилиту, чтобы изменить возвращаемый тип на PromiseMonad<boolean>
type Int2 = PromisifyMethodsReturnType<Int>;

export class ValidatorSyncEngine {
  translatorNodeValidator = new TranslatorNodeValidator();
  translatorHTMLNodeValidator = new TranslatorHTMLNodeValidator();

  isNode(node: TranslatorNode): SyncPromise<boolean> {
    return new SyncPromise((res) => {
      res(this.translatorNodeValidator.isNode(node));
    });
  }
}

export class ValidatorAsyncEngine {
  translatorNodeValidator = new TranslatorNodeValidator();
  translatorHTMLNodeValidator = new TranslatorHTMLNodeValidator();

  isNode(node: TranslatorNode): Promise<boolean> {
    return new Promise((res) => {
      res(this.translatorNodeValidator.isNode(node));
    });
  }
}

export class Validator {
  engine = new ValidatorSyncEngine();

  // checkRelationship(toNode: TranslatorNode, fromNode: TranslatorNode, params: unknown) {
  //   return false;
  // }

  isNode(node: TranslatorNode) {
    return this.engine.isNode(node);
  }
}
