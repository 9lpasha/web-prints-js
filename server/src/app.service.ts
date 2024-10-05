/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {Injectable} from '@nestjs/common';
import {TranslatorNode, TranslatorNodeTypes, TranslatorTemplates} from './types';

const templates: TranslatorTemplates = {
  [TranslatorNodeTypes.HTML_BUTTON_ELEMENT]: 'const {{elementId}} = document.getElementById({{elementId}})',
};

const validator = (node: any) => {
  // if (!isValidNode(node)) {
  //   return 'Invalid Node';
  // }

  // isValidTranslatorHTMLButtonElement function
  if (node.type === TranslatorNodeTypes.HTML_BUTTON_ELEMENT) {
    if (node.prev != null) {
      return 'Invalid prev';
    }

    if (node.next !== null && !Array.isArray(node.next)) {
      return 'Invalid next';
    }

    if (node.next.length > 0) {
      for (let i = 0; i < node.next.length; i++) {
        const eventNode = node.next[i];

        if (!{}[eventNode.type]) {
          return 'Invalid next';
        }
      }
    }
  }
};

const buttonNode = {
  prev: null, // Всегда null - проверять
  next: null, // null | EventNode[] | [] - Может быть только EventNode[]

  id: 'id1',
  name: 'MyButton',
  type: TranslatorNodeTypes.HTML_BUTTON_ELEMENT,

  sourceParams: {
    elementId: 'buttonId',
  },
};

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
