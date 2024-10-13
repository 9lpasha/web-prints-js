import {HTMLButtonNode, TranslatorNodeTypes} from 'src/Node/types';
import {v4 as generateId} from 'uuid';

export const invalidHtmlButtonNode_0: HTMLButtonNode = {
  id: null as string,
  name: 'InvalidHtmlButtonNode_0',
  type: TranslatorNodeTypes.HTML_BUTTON_ELEMENT,
  next: null,
  prev: null,
  sourceParams: {},
};

export const invalidHtmlButtonNode_1: HTMLButtonNode = {
  id: generateId(),
  name: null as string,
  type: TranslatorNodeTypes.HTML_BUTTON_ELEMENT,
  next: null,
  prev: null,
  sourceParams: {},
};

export const invalidHtmlButtonNode_2: HTMLButtonNode = {
  id: generateId(),
  name: 'InvalidHtmlButtonNode_2',
  type: null as TranslatorNodeTypes.HTML_BUTTON_ELEMENT,
  next: null,
  prev: null,
  sourceParams: {},
};

export const invalidHtmlButtonNode_3: HTMLButtonNode = {
  id: generateId(),
  name: 'InvalidHtmlButtonNode_0',
  type: TranslatorNodeTypes.HTML_BUTTON_ELEMENT,
  next: null,
  prev: null,
  sourceParams: null as HTMLButtonNode['sourceParams'],
};
