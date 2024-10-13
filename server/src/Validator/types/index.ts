import {CSSNode, HTMLButtonNode, TranslatorNode, TranslatorNodeTypes} from 'src/Node/types';
import {PromisifyMethodsReturnType} from 'src/types/utils';

export enum ValidatorErrorTypes {
  INVALID_NODE = 'INVALID_NODE',
  INVALID_HTML_NODE = 'INVALID_HTML_NODE',
  INVALID_CSS_NODE = 'INVALID_CSS_NODE',
}

export type TranslatorTemplates = Record<TranslatorNodeTypes, string>;

export type InvalidTranslatorNodeProperties = Partial<Record<keyof TranslatorNode, string>>;

export interface IBaseNodeValidator {
  isNode(node: TranslatorNode): node is TranslatorNode;
}

export interface IHTMLNodeValidator {
  isHtmlButtonNode(node: TranslatorNode): node is HTMLButtonNode;
}

export interface ICSSNodeValidator {
  isCssNode(node: TranslatorNode): node is CSSNode;
}

export type ValidatorEngine = PromisifyMethodsReturnType<IBaseNodeValidator & IHTMLNodeValidator & ICSSNodeValidator>;

export type NodeValidator = ValidatorEngine & {
  checkRelationship: (toNode: TranslatorNode, fromNode: TranslatorNode, params: unknown) => boolean;
};
