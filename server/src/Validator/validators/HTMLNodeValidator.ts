import {HTMLButtonNode, TranslatorNode, TranslatorNodeTypes} from 'src/Node/types';
import {IHTMLNodeValidator, InvalidTranslatorNodeProperties, ValidatorErrorTypes} from '../types';
import {ValidatorNodeError} from '../errors/ValidatorNodeError';
import {WithProxyBaseNodeValidation} from './WithProxyBaseNodeValidation';

export class HTMLNodeValidator extends WithProxyBaseNodeValidation implements IHTMLNodeValidator {
  isHtmlButtonNode(node: TranslatorNode): node is HTMLButtonNode {
    const invalidProperties: InvalidTranslatorNodeProperties = {};

    if (node.type !== TranslatorNodeTypes.HTML_BUTTON_ELEMENT) invalidProperties.type = 'Invalid type';

    if (node.prev != null) invalidProperties.prev = 'Invalid prev';
    if (node.next != null && !Array.isArray(node.next)) invalidProperties.next = 'Invalid next';

    // Добавить проверку какие ноды могут быть в next у HtmlButtonNode
    // if (node.next.length > 0) {
    //   for (let i = 0; i < node.next.length; i++) {
    //     const eventNode = node.next[i];

    //     if (!{}[eventNode.type]) {
    //       invalidProperties.next = 'Invalid next';
    //       break;
    //     }
    //   }
    // }

    // Добавить что элементы могут быть только CSSNode
    if (node.sourceParams.css != null && !Array.isArray(node.sourceParams.css)) invalidProperties.sourceParams = 'Invalid sourceParams.css';

    if (node.sourceParams.text != null && typeof node.sourceParams.text !== 'string')
      invalidProperties.sourceParams = 'Invalid sourceParams.text';

    if (Object.keys(invalidProperties).length > 0) {
      throw new ValidatorNodeError('Invalid HTML Node', invalidProperties, ValidatorErrorTypes.INVALID_HTML_NODE);
    }

    return true;
  }
}
