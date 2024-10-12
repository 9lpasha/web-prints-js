import {TranslatorNode} from 'src/Node/types';
import {InvalidTranslatorNodeProperties, ValidatorErrorTypes} from '../types';
import {ValidatorNodeError} from '../errors/ValidatorNodeError';

export class HTMLNodeValidator {
  isValidButtonElement(node: TranslatorNode) {
    const invalidProperties: InvalidTranslatorNodeProperties = {};

    if (node.prev != null) invalidProperties.prev = 'Invalid prev';
    if (node.next !== null && !Array.isArray(node.next)) invalidProperties.next = 'Invalid next';

    if (node.next.length > 0) {
      for (let i = 0; i < node.next.length; i++) {
        const eventNode = node.next[i];

        if (!{}[eventNode.type]) {
          return 'Invalid next';
        }
      }
    }

    throw new ValidatorNodeError('Invalid Node', invalidProperties, ValidatorErrorTypes.INVALID_HTML_NODE);
  }
}
