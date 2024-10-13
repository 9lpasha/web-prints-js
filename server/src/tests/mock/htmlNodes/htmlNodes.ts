import {HTMLButtonNode, TranslatorNodeTypes} from 'src/Node/types';
import {v4 as generateId} from 'uuid';
import {cssNode_0, cssNode_1, cssNode_2} from '../cssNodes/cssNodes';

export const htmlButtonNode_0: HTMLButtonNode = {
  id: generateId(),
  name: 'htmlButtonNode_0',
  type: TranslatorNodeTypes.HTML_BUTTON_ELEMENT,
  next: null,
  prev: null,
  sourceParams: {},
};

export const htmlButtonNode_1: HTMLButtonNode = {
  id: generateId(),
  name: 'htmlButtonNode_1',
  type: TranslatorNodeTypes.HTML_BUTTON_ELEMENT,
  next: null,
  prev: null,
  sourceParams: {
    text: 'text_htmlButtonNode_1',
  },
};

export const htmlButtonNode_2: HTMLButtonNode = {
  id: generateId(),
  name: 'htmlButtonNode_2',
  type: TranslatorNodeTypes.HTML_BUTTON_ELEMENT,
  next: null,
  prev: null,
  sourceParams: {
    css: [cssNode_0],
  },
};

export const htmlButtonNode_3: HTMLButtonNode = {
  id: generateId(),
  name: 'htmlButtonNode_3',
  type: TranslatorNodeTypes.HTML_BUTTON_ELEMENT,
  next: null,
  prev: null,
  sourceParams: {
    css: [cssNode_0, cssNode_1],
  },
};

export const htmlButtonNode_4: HTMLButtonNode = {
  id: generateId(),
  name: 'htmlButtonNode_4',
  type: TranslatorNodeTypes.HTML_BUTTON_ELEMENT,
  next: null,
  prev: null,
  sourceParams: {
    css: [cssNode_0],
    text: 'text_htmlButtonNode_4',
  },
};

export const htmlButtonNode_5: HTMLButtonNode = {
  id: generateId(),
  name: 'htmlButtonNode_5',
  type: TranslatorNodeTypes.HTML_BUTTON_ELEMENT,
  next: null,
  prev: null,
  sourceParams: {
    css: [cssNode_0, cssNode_1],
    text: 'text_htmlButtonNode_5',
  },
};

export const htmlButtonNode_6: HTMLButtonNode = {
  id: generateId(),
  name: 'htmlButtonNode_6',
  type: TranslatorNodeTypes.HTML_BUTTON_ELEMENT,
  next: null,
  prev: null,
  sourceParams: {
    css: [cssNode_0, cssNode_1, cssNode_2],
    text: 'text_htmlButtonNode_6',
  },
};
