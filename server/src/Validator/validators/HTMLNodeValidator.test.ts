import {
  htmlButtonNode_0,
  htmlButtonNode_1,
  htmlButtonNode_2,
  htmlButtonNode_3,
  htmlButtonNode_4,
  htmlButtonNode_5,
  htmlButtonNode_6,
  invalidHtmlButtonNode_0,
  invalidHtmlButtonNode_1,
  invalidHtmlButtonNode_2,
  invalidHtmlButtonNode_3,
} from 'src/tests/mock';
import {HTMLNodeValidator} from './HTMLNodeValidator';
import {ValidatorNodeError} from '../errors/ValidatorNodeError';

describe('HTMLNodeValidator', () => {
  test('htmlButtonNode_0', () => {
    const htmlNodeValidator = new HTMLNodeValidator();

    expect(htmlNodeValidator.isHtmlButtonNode(htmlButtonNode_0)).toBe(true);
  });

  test('htmlButtonNode_1', () => {
    const htmlNodeValidator = new HTMLNodeValidator();

    expect(htmlNodeValidator.isHtmlButtonNode(htmlButtonNode_1)).toBe(true);
  });

  test('htmlButtonNode_2', () => {
    const htmlNodeValidator = new HTMLNodeValidator();

    expect(htmlNodeValidator.isHtmlButtonNode(htmlButtonNode_2)).toBe(true);
  });

  test('htmlButtonNode_3', () => {
    const htmlNodeValidator = new HTMLNodeValidator();

    expect(htmlNodeValidator.isHtmlButtonNode(htmlButtonNode_3)).toBe(true);
  });

  test('htmlButtonNode_4', () => {
    const htmlNodeValidator = new HTMLNodeValidator();

    expect(htmlNodeValidator.isHtmlButtonNode(htmlButtonNode_4)).toBe(true);
  });

  test('htmlButtonNode_5', () => {
    const htmlNodeValidator = new HTMLNodeValidator();

    expect(htmlNodeValidator.isHtmlButtonNode(htmlButtonNode_5)).toBe(true);
  });

  test('htmlButtonNode_6', () => {
    const htmlNodeValidator = new HTMLNodeValidator();

    expect(htmlNodeValidator.isHtmlButtonNode(htmlButtonNode_6)).toBe(true);
  });

  describe('Invalid html nodes - proxy error', () => {
    test('invalidHtmlButtonNode_0', () => {
      const htmlNodeValidator = new HTMLNodeValidator();

      let err: ValidatorNodeError;

      try {
        htmlNodeValidator.isHtmlButtonNode(invalidHtmlButtonNode_0);
      } catch (error) {
        err = error as ValidatorNodeError;
      }

      expect(err instanceof ValidatorNodeError).toBe(true);
      expect(err.invalidProperties).toEqual({id: 'Invalid id'});
    });

    test('invalidHtmlButtonNode_1', () => {
      const htmlNodeValidator = new HTMLNodeValidator();

      let err: ValidatorNodeError;

      try {
        htmlNodeValidator.isHtmlButtonNode(invalidHtmlButtonNode_1);
      } catch (error) {
        err = error as ValidatorNodeError;
      }

      expect(err instanceof ValidatorNodeError).toBe(true);
      expect(err.invalidProperties).toEqual({name: 'Invalid name'});
    });

    test('invalidHtmlButtonNode_2', () => {
      const htmlNodeValidator = new HTMLNodeValidator();

      let err: ValidatorNodeError;

      try {
        htmlNodeValidator.isHtmlButtonNode(invalidHtmlButtonNode_2);
      } catch (error) {
        err = error as ValidatorNodeError;
      }

      expect(err instanceof ValidatorNodeError).toBe(true);
      expect(err.invalidProperties).toEqual({type: 'Invalid type'});
    });

    test('invalidHtmlButtonNode_3', () => {
      const htmlNodeValidator = new HTMLNodeValidator();

      let err: ValidatorNodeError;

      try {
        htmlNodeValidator.isHtmlButtonNode(invalidHtmlButtonNode_3);
      } catch (error) {
        err = error as ValidatorNodeError;
      }

      expect(err instanceof ValidatorNodeError).toBe(true);
      expect(err.invalidProperties).toEqual({sourceParams: 'Invalid sourceParams'});
    });
  });
});
