import {SyncPromise} from 'src/SyncPromise/SyncPromise';

/* eslint-disable @typescript-eslint/no-empty-object-type */
export type Nullable<T = null> = null | undefined | T;
export type AnyOneArgFunction<ARG = unknown, R = unknown> = (arg: ARG) => R;

export type SerializablePrimitiveValues = string | number | boolean | null;
export type SerializableValue = SerializablePrimitiveValues | SerializableArray | SerializableObject;

export interface SerializableObject {
  [key: string]: SerializableValue;
}

export interface SerializableArray extends Array<SerializableValue> {}

export type PromiseMonad<T> = (Promise<T> | SyncPromise<T>) & {unwrap?: () => T};
