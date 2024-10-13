import {
  cssNode_0,
  cssNode_1,
  cssNode_2,
  htmlButtonNode_0,
  htmlButtonNode_1,
  htmlButtonNode_2,
  htmlButtonNode_3,
  htmlButtonNode_4,
  htmlButtonNode_5,
  htmlButtonNode_6,
} from 'src/tests/mock';
import {BaseNodeValidator} from './BaseNodeValidator';

describe('BaseNodeValidator', () => {
  test('cssNode_0', () => {
    const baseNodeValidator = new BaseNodeValidator();

    expect(baseNodeValidator.isNode(cssNode_0)).toBe(true);
  });

  test('cssNode_1', () => {
    const baseNodeValidator = new BaseNodeValidator();

    expect(baseNodeValidator.isNode(cssNode_1)).toBe(true);
  });

  test('cssNode_2', () => {
    const baseNodeValidator = new BaseNodeValidator();

    expect(baseNodeValidator.isNode(cssNode_2)).toBe(true);
  });

  test('htmlButtonNode_0', () => {
    const baseNodeValidator = new BaseNodeValidator();

    expect(baseNodeValidator.isNode(htmlButtonNode_0)).toBe(true);
  });

  test('htmlButtonNode_1', () => {
    const baseNodeValidator = new BaseNodeValidator();

    expect(baseNodeValidator.isNode(htmlButtonNode_1)).toBe(true);
  });

  test('htmlButtonNode_2', () => {
    const baseNodeValidator = new BaseNodeValidator();

    expect(baseNodeValidator.isNode(htmlButtonNode_2)).toBe(true);
  });

  test('htmlButtonNode_3', () => {
    const baseNodeValidator = new BaseNodeValidator();

    expect(baseNodeValidator.isNode(htmlButtonNode_3)).toBe(true);
  });

  test('htmlButtonNode_4', () => {
    const baseNodeValidator = new BaseNodeValidator();

    expect(baseNodeValidator.isNode(htmlButtonNode_4)).toBe(true);
  });

  test('htmlButtonNode_5', () => {
    const baseNodeValidator = new BaseNodeValidator();

    expect(baseNodeValidator.isNode(htmlButtonNode_5)).toBe(true);
  });

  test('htmlButtonNode_6', () => {
    const baseNodeValidator = new BaseNodeValidator();

    expect(baseNodeValidator.isNode(htmlButtonNode_6)).toBe(true);
  });
});
