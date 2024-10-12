import {TranslatorNode, TranslatorNodeTypes} from 'src/Node/types';
import {Translator} from './Translator';
import {TranslatorAsyncEngine} from './engines/TranslatorAsyncEngine';
import {Validator} from 'src/Validator/Validator';
import {ValidatorAsyncEngine} from 'src/Validator/engines/ValidatorAsyncEngine';

describe('Translator', () => {
  const baseNode: TranslatorNode = {
    id: 'uuid',
    name: 'name',
    type: TranslatorNodeTypes.HTML_BUTTON_ELEMENT,
    next: null,
    prev: null,
    sourceParams: {},
  };

  test('Async validate base node', async () => {
    const translator = new Translator(new TranslatorAsyncEngine(new Validator(new ValidatorAsyncEngine())));

    const res = await translator.translate([baseNode, baseNode, baseNode]);

    expect(typeof res.css).toBe('string');
    expect(typeof res.html).toBe('string');
    expect(typeof res.js).toBe('string');

    expect(res).toEqual({css: '.myClass {}', html: '<div>123</div>', js: 'const a = 10;'});
  });
});
