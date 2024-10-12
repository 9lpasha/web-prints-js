import {TranslatorNode, TranslatorNodeTypes} from 'src/Node/types';
import {PromisifyMethodsReturnType} from 'src/types/utils';

export enum ValidatorErrorTypes {
  INVALID_NODE = 'INVALID_NODE',
  INVALID_HTML_NODE = 'INVALID_HTML_NODE',
}

export type TranslatorTemplates = Record<TranslatorNodeTypes, string>;

export type InvalidTranslatorNodeProperties = Partial<Record<keyof TranslatorNode, string>>;

interface SimpleValidatorEngine {
  isNode(node: TranslatorNode): boolean;
}

export type ValidatorEngine = PromisifyMethodsReturnType<SimpleValidatorEngine>;

export type NodeValidator = ValidatorEngine & {
  checkRelationship: (toNode: TranslatorNode, fromNode: TranslatorNode, params: unknown) => boolean;
};
