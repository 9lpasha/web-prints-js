/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import type {SyncPromise} from './syncPromise';

export type CanPromiseLike<T> = T | PromiseLike<T>;

export type PromiseState = 'pending' | 'fulfilled' | 'rejected';

export type Value<T = unknown> = CanPromiseLike<T>;

export type InitResolveHandler<T = unknown> = (value?: Value<T>) => void;
export type InitRejectHandler = (reason?: unknown) => void;

export type Executor<T = unknown> = (resolve: InitResolveHandler<T>, reject: InitRejectHandler) => void;

export type ResolveHandler<V = unknown, R = V> = Function | ((value: V) => Value<R>);

export type RejectHandler<T = unknown> = ResolveHandler<unknown, T>;

export type SyncPromiseWithResolvers<T = unknown> = {
  resolve: InitResolveHandler<T>;
  reject: InitRejectHandler;
  promise: SyncPromise<T>;
};
