import {CSSNode, HTMLButtonNode, TranslatorNodeTypes} from 'src/Node/types';
import {TranslatorFactory} from './Translator';
// import {ValidatorNodeError} from 'src/Validator/errors/ValidatorNodeError';
// import {TranslatorResult} from './types';
import {v4 as generateId} from 'uuid';
// import {TranslatorAsyncEngine} from './engines/TranslatorAsyncEngine';
// import {ValidatorFactory} from 'src/Validator/Validator';
// import {ValidatorAsyncEngine} from 'src/Validator/engines/ValidatorAsyncEngine';

describe('Translator', () => {
  const cssNode0: CSSNode = {
    id: generateId(),
    name: 'cssNode',
    type: TranslatorNodeTypes.CSS,
    next: null,
    prev: null,
    sourceParams: {
      code: 'color: red; background: blue;',
    },
  };

  const cssNode1: CSSNode = {
    id: generateId(),
    name: 'cssNode',
    type: TranslatorNodeTypes.CSS,
    next: null,
    prev: null,
    sourceParams: {
      code: 'display: flex;',
    },
  };

  const htmlButtonNode: HTMLButtonNode = {
    id: generateId(),
    name: 'htmlButtonNode',
    type: TranslatorNodeTypes.HTML_BUTTON_ELEMENT,
    next: null,
    prev: null,
    sourceParams: {},
  };

  const htmlButtonNodeWithText: HTMLButtonNode = {
    id: generateId(),
    name: 'htmlButtonNode',
    type: TranslatorNodeTypes.HTML_BUTTON_ELEMENT,
    next: null,
    prev: null,
    sourceParams: {
      text: 'Hello! I am a button!',
    },
  };

  const htmlButtonNodeWith1Css: HTMLButtonNode = {
    id: generateId(),
    name: 'htmlButtonNode',
    type: TranslatorNodeTypes.HTML_BUTTON_ELEMENT,
    next: null,
    prev: null,
    sourceParams: {
      css: [cssNode0],
    },
  };

  const htmlButtonNodeWith2Css: HTMLButtonNode = {
    id: generateId(),
    name: 'htmlButtonNode',
    type: TranslatorNodeTypes.HTML_BUTTON_ELEMENT,
    next: null,
    prev: null,
    sourceParams: {
      css: [cssNode0, cssNode1],
    },
  };

  const htmlButtonNodeWith1CssAndText: HTMLButtonNode = {
    id: generateId(),
    name: 'htmlButtonNode',
    type: TranslatorNodeTypes.HTML_BUTTON_ELEMENT,
    next: null,
    prev: null,
    sourceParams: {
      css: [cssNode0],
      text: 'Hello world!',
    },
  };

  const htmlButtonNodeWith2CssAndText: HTMLButtonNode = {
    id: generateId(),
    name: 'htmlButtonNode',
    type: TranslatorNodeTypes.HTML_BUTTON_ELEMENT,
    next: null,
    prev: null,
    sourceParams: {
      css: [cssNode0, cssNode1],
      text: 'Hello world!',
    },
  };

  // const htmlButtonNodeInvalid = {
  //   // id: 'uuid',
  //   // name: 'htmlButtonNode',
  //   type: TranslatorNodeTypes.HTML_BUTTON_ELEMENT,
  //   next: null,
  //   prev: null,
  //   sourceParams: {},
  // } as TranslatorNode;

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

    const res = translator.translate([htmlButtonNode]).unwrap();

    expect(res).toEqual({css: '', html: '<button></button>', js: ''});
  });

  test('Sync translate valid empty button node', () => {
    const translator = TranslatorFactory();

    const res = translator.translate([htmlButtonNodeWithText]).unwrap();

    expect(res).toEqual({css: '', html: '<button>Hello! I am a button!</button>', js: ''});
  });

  test('Sync translate valid empty button node + 1 css', () => {
    const translator = TranslatorFactory();

    const res = translator.translate([htmlButtonNodeWith1Css]).unwrap();

    expect(res).toEqual({
      css: '.uuid {color: red; background: blue;}',
      html: '<button class="uuid"></button>',
      js: '',
    });
  });

  test('Sync translate valid empty button node + 2 css', () => {
    const translator = TranslatorFactory();

    const res = translator.translate([htmlButtonNodeWith2Css]).unwrap();

    expect(res).toEqual({
      css: '.uuid {color: red; background: blue; display: flex;}',
      html: '<button class="uuid"></button>',
      js: '',
    });
  });

  test('Sync translate valid empty button node + 1 css + text', () => {
    const translator = TranslatorFactory();

    const res = translator.translate([htmlButtonNodeWith1CssAndText]).unwrap();

    expect(res).toEqual({
      css: '.uuid {color: red; background: blue;}',
      html: '<button class="uuid">Hello world!</button>',
      js: '',
    });
  });

  test('Sync translate valid empty button node + 2 css + text', () => {
    const translator = TranslatorFactory();

    const res = translator.translate([htmlButtonNodeWith2CssAndText]).unwrap();

    expect(res).toEqual({
      css: '.uuid {color: red; background: blue; display: flex;}',
      html: '<button class="uuid">Hello world!</button>',
      js: '',
    });
  });
});
