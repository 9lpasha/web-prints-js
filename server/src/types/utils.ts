import {PromiseMonad} from './global';

export type PromisifyMethodsReturnType<T> = {
  [K in keyof T]: T[K] extends (...args: infer A) => infer R ? (...args: A) => PromiseMonad<R> : T[K];
};
