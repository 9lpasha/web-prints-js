import {
  htmlButtonNode_0,
  htmlButtonNode_1,
  htmlButtonNode_2,
  htmlButtonNode_3,
  htmlButtonNode_4,
  htmlButtonNode_5,
  htmlButtonNode_6,
} from 'src/tests/mock';
import {TranslatorFactory} from './Translator';

describe('Translator', () => {
  // test('Async translate empty button node', async () => {
  //   const syncValidator = ValidatorFactory(new ValidatorAsyncEngine());
  //   const translator = TranslatorFactory(new TranslatorAsyncEngine(syncValidator));

  //   const res = await translator.translate([htmlButtonNode]);

  //   expect(typeof res.css).toBe('string');
  //   expect(typeof res.html).toBe('string');
  //   expect(typeof res.js).toBe('string');

  //   expect(res).toEqual({css: '', html: '<button></button>', js: ''});
  // });

  // test('Sync translate invalid empty button node', () => {
  //   const translator = TranslatorFactory();

  //   let err: ValidatorNodeError;
  //   let res: TranslatorResult;

  //   translator
  //     .translate([htmlButtonNodeInvalid])
  //     .then((result) => (res = result))
  //     .catch((error) => {
  //       err = error;
  //     });

  //   expect(res).toBe(undefined);
  //   expect(err instanceof ValidatorNodeError).toBe(true);
  //   expect(err.invalidProperties).toEqual({id: 'Invalid id', name: 'Invalid name'});
  // });

  test('Sync translate valid empty button node', () => {
    const translator = TranslatorFactory();

    const res = translator.translate([htmlButtonNode_0]).unwrap();

    expect(res).toEqual({css: '', html: '<button></button>', js: ''});
  });

  test('Sync translate valid empty button node', () => {
    const translator = TranslatorFactory();

    const res = translator.translate([htmlButtonNode_1]).unwrap();

    expect(res).toEqual({css: '', html: '<button>text_htmlButtonNode_1</button>', js: ''});
  });

  test('Sync translate valid empty button node + 1 css', () => {
    const translator = TranslatorFactory();

    const res = translator.translate([htmlButtonNode_2]).unwrap();

    expect(res).toEqual({
      css: '.uuid {color: red; background: blue;}',
      html: '<button class="uuid"></button>',
      js: '',
    });
  });

  test('Sync translate valid empty button node + 2 css', () => {
    const translator = TranslatorFactory();

    const res = translator.translate([htmlButtonNode_3]).unwrap();

    expect(res).toEqual({
      css: '.uuid {color: red; background: blue; display: flex;}',
      html: '<button class="uuid"></button>',
      js: '',
    });
  });

  test('Sync translate valid empty button node + 1 css + text', () => {
    const translator = TranslatorFactory();

    const res = translator.translate([htmlButtonNode_4]).unwrap();

    expect(res).toEqual({
      css: '.uuid {color: red; background: blue;}',
      html: '<button class="uuid">text_htmlButtonNode_4</button>',
      js: '',
    });
  });

  test('Sync translate valid empty button node + 2 css + text', () => {
    const translator = TranslatorFactory();

    const res = translator.translate([htmlButtonNode_5]).unwrap();

    expect(res).toEqual({
      css: '.uuid {color: red; background: blue; display: flex;}',
      html: '<button class="uuid">text_htmlButtonNode_5</button>',
      js: '',
    });
  });

  test('Sync translate valid empty button node + 3 css + text', () => {
    const translator = TranslatorFactory();

    const res = translator.translate([htmlButtonNode_6]).unwrap();

    expect(res).toEqual({
      css: '.uuid {color: red; background: blue; display: flex; border: 1px solid red; border-radius: 10px;}',
      html: '<button class="uuid">text_htmlButtonNode_6</button>',
      js: '',
    });
  });
});
