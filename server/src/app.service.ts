/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {Injectable} from '@nestjs/common';
import {ValidatorFactory} from './Validator/Validator';
import {TranslatorNodeTypes} from './Node/types';
import {Translator} from './Translator/Translator';

const node1 = {
  id: 'uuid',
  name: 'name',
  type: TranslatorNodeTypes.HTML_BUTTON_ELEMENT,
  next: null,
  prev: null,
  sourceParams: {},
};

const node2 = {
  id: 'uuid',
  name: 'name',
  type: TranslatorNodeTypes.HTML_BUTTON_ELEMENT,
  next: null,
  prev: null,
  sourceParams: {},
};

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    // const validator = ValidatorFactory();

    // validator
    //   .isNode({
    //     id: 'uuid',
    //     name: 'name',
    //     type: TranslatorNodeTypes.HTML_BUTTON_ELEMENT,
    //     next: null,
    //     prev: null,
    //     sourceParams: {},
    //   })
    //   .then((res) => {
    //     console.log('res', res);
    //   })
    //   .catch((e) => {
    //     console.log('error', e.invalidProperties);
    //   });

    // const translator = new Translator();

    // translator.translate([node1, node2]);

    return 'Hello World!';
  }
}
