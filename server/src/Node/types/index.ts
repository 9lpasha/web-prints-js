export enum TranslatorNodeTypes {
  HTML_BUTTON_ELEMENT = 'HTML_BUTTON_ELEMENT',
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TranslatorNodeSourceParams = Record<string, any>;

export interface TranslatorNode {
  prev: null | TranslatorNode[];
  next: null | TranslatorNode[];

  id: string;
  name: string;
  type: TranslatorNodeTypes;

  sourceParams: TranslatorNodeSourceParams;
}
