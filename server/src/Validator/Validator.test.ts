import {TranslatorNode, TranslatorNodeTypes} from 'src/Node/types';
import {ValidatorFactory} from './Validator';
import {ValidatorAsyncEngine} from './engines/ValidatorAsyncEngine';

describe('Validator', () => {
  const baseNode: TranslatorNode = {
    id: 'uuid',
    name: 'name',
    type: TranslatorNodeTypes.HTML_BUTTON_ELEMENT,
    next: null,
    prev: null,
    sourceParams: {},
  };

  test('Async validate base node', async () => {
    const validator = ValidatorFactory(new ValidatorAsyncEngine());

    let res: boolean = false;

    await validator
      .isNode(baseNode)
      .then((result) => {
        res = result;
      })
      .catch((error) => {
        console.error(error);
      });

    expect(res).toBe(true);
  });

  test('Sync validate base node', () => {
    const validator = ValidatorFactory();

    let res: boolean = false;

    validator
      .isNode(baseNode)
      .then((result) => {
        res = result;
      })
      .catch((error) => {
        console.error(error);
      });

    expect(res).toBe(true);
  });
});
