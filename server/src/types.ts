/* eslint-disable @typescript-eslint/no-empty-object-type */

export type SerializablePrimitiveValues = string | number | boolean | null;
export type SerializableValue = SerializablePrimitiveValues | SerializableArray | SerializableObject;

export interface SerializableObject {
  [key: string]: SerializableValue;
}

export interface SerializableArray extends Array<SerializableValue> {}

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

export type TranslatorTemplates = Record<TranslatorNodeTypes, string>;
