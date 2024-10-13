import {CSSNode, TranslatorNodeTypes} from 'src/Node/types';
import {v4 as generateId} from 'uuid';

export const invalidCssNode_0: CSSNode = {
  id: null as string,
  name: 'invalidCssNode_0',
  type: TranslatorNodeTypes.CSS,
  next: null,
  prev: null,
  sourceParams: {
    code: 'color: red; background: blue;',
  },
};

export const invalidCssNode_1: CSSNode = {
  id: generateId(),
  name: null as string,
  type: TranslatorNodeTypes.CSS,
  next: null,
  prev: null,
  sourceParams: {
    code: 'display: flex;',
  },
};

export const invalidCssNode_2: CSSNode = {
  id: generateId(),
  name: 'invalidCssNode_2',
  type: null as TranslatorNodeTypes.CSS,
  next: null,
  prev: null,
  sourceParams: {
    code: 'display: flex;',
  },
};

export const invalidCssNode_3: CSSNode = {
  id: generateId(),
  name: 'invalidCssNode_3',
  type: TranslatorNodeTypes.CSS,
  next: null,
  prev: null,
  sourceParams: null as CSSNode['sourceParams'],
};
