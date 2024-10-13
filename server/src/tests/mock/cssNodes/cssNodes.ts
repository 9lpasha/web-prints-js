import {CSSNode, TranslatorNodeTypes} from 'src/Node/types';
import {v4 as generateId} from 'uuid';

export const cssNode_0: CSSNode = {
  id: generateId(),
  name: 'cssNode_0',
  type: TranslatorNodeTypes.CSS,
  next: null,
  prev: null,
  sourceParams: {
    code: 'color: red; background: blue;',
  },
};

export const cssNode_1: CSSNode = {
  id: generateId(),
  name: 'cssNode_1',
  type: TranslatorNodeTypes.CSS,
  next: null,
  prev: null,
  sourceParams: {
    code: 'display: flex;',
  },
};

export const cssNode_2: CSSNode = {
  id: generateId(),
  name: 'cssNode_2',
  type: TranslatorNodeTypes.CSS,
  next: null,
  prev: null,
  sourceParams: {
    code: 'border: 1px solid red; border-radius: 10px;',
  },
};
