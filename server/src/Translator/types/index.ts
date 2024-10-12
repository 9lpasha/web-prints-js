import {TranslatorNode} from 'src/Node/types';
import {PromiseMonad} from 'src/types/global';

export type TranslatorResult = {
  html: string;
  css: string;
  js: string;
};

export interface TranslatorEngine {
  translate(nodes: TranslatorNode[]): PromiseMonad<TranslatorResult>;
}
