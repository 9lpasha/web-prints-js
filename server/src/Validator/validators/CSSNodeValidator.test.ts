import {cssNode_0, cssNode_1, cssNode_2, invalidCssNode_0, invalidCssNode_1, invalidCssNode_2, invalidCssNode_3} from 'src/tests/mock';
import {CSSNodeValidator} from './CSSNodeValidator';
import {ValidatorNodeError} from '../errors/ValidatorNodeError';

describe('CSSNodeValidator', () => {
  test('cssNode_0', () => {
    const cssNodeValidator = new CSSNodeValidator();

    expect(cssNodeValidator.isCssNode(cssNode_0)).toBe(true);
  });

  test('cssNode_1', () => {
    const cssNodeValidator = new CSSNodeValidator();

    expect(cssNodeValidator.isCssNode(cssNode_1)).toBe(true);
  });

  test('cssNode_2', () => {
    const cssNodeValidator = new CSSNodeValidator();

    expect(cssNodeValidator.isCssNode(cssNode_2)).toBe(true);
  });

  describe('Invalid css nodes - proxy error', () => {
    test('invalidCssNode_0', () => {
      const cssNodeValidator = new CSSNodeValidator();

      let err: ValidatorNodeError;

      try {
        cssNodeValidator.isCssNode(invalidCssNode_0);
      } catch (error) {
        err = error as ValidatorNodeError;
      }

      expect(err instanceof ValidatorNodeError).toBe(true);
      expect(err.invalidProperties).toEqual({id: 'Invalid id'});
    });

    test('invalidCssNode_1', () => {
      const cssNodeValidator = new CSSNodeValidator();

      let err: ValidatorNodeError;

      try {
        cssNodeValidator.isCssNode(invalidCssNode_1);
      } catch (error) {
        err = error as ValidatorNodeError;
      }

      expect(err instanceof ValidatorNodeError).toBe(true);
      expect(err.invalidProperties).toEqual({name: 'Invalid name'});
    });

    test('invalidCssNode_2', () => {
      const cssNodeValidator = new CSSNodeValidator();

      let err: ValidatorNodeError;

      try {
        cssNodeValidator.isCssNode(invalidCssNode_2);
      } catch (error) {
        err = error as ValidatorNodeError;
      }

      expect(err instanceof ValidatorNodeError).toBe(true);
      expect(err.invalidProperties).toEqual({type: 'Invalid type'});
    });

    test('invalidCssNode_3', () => {
      const cssNodeValidator = new CSSNodeValidator();

      let err: ValidatorNodeError;

      try {
        cssNodeValidator.isCssNode(invalidCssNode_3);
      } catch (error) {
        err = error as ValidatorNodeError;
      }

      expect(err instanceof ValidatorNodeError).toBe(true);
      expect(err.invalidProperties).toEqual({sourceParams: 'Invalid sourceParams'});
    });
  });
});
