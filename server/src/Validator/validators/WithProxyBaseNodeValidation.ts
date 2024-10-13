/* eslint-disable @typescript-eslint/no-explicit-any */
import {BaseNodeValidator} from './BaseNodeValidator';

export abstract class WithProxyBaseNodeValidation {
  constructor() {
    const baseNodeValidator = new BaseNodeValidator();

    return new Proxy(this, {
      get(target: any, prop, receiver) {
        const originalMethod = target[prop];

        if (typeof originalMethod === 'function') {
          return function (...nodes: any[]) {
            nodes.every(baseNodeValidator.isNode);

            return Reflect.apply(originalMethod, target, nodes);
          };
        }

        return Reflect.get(target, prop, receiver);
      },
    });
  }
}
