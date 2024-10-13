import {Nullable} from 'src/types/global';

export enum TranslatorNodeTypes {
  HTML_BUTTON_ELEMENT = 'HTML_BUTTON_ELEMENT',
  CSS = 'CSS',
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TranslatorNodeSourceParams = Record<string, any>;

export interface TranslatorNode {
  prev: Nullable<TranslatorNode[]>;
  next: Nullable<TranslatorNode[]>;

  id: string;
  name: string;
  type: TranslatorNodeTypes;

  sourceParams: TranslatorNodeSourceParams;
}

export interface CSSNode extends TranslatorNode {
  prev: Nullable;
  next: Nullable;
  type: TranslatorNodeTypes.CSS;

  sourceParams: {
    code: Nullable<string>;
  };
}

export interface HTMLButtonNode extends TranslatorNode {
  type: TranslatorNodeTypes.HTML_BUTTON_ELEMENT;

  sourceParams: {
    css?: Nullable<TranslatorNode[]>;
    text?: Nullable<string>;
  };
}
