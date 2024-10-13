import {CSSNode, TranslatorNode, TranslatorNodeTypes} from 'src/Node/types';
import {ValidatorNodeError} from '../errors/ValidatorNodeError';
import {ICSSNodeValidator, InvalidTranslatorNodeProperties, ValidatorErrorTypes} from '../types';
import {WithProxyBaseNodeValidation} from './WithProxyBaseNodeValidation';

export class CSSNodeValidator extends WithProxyBaseNodeValidation implements ICSSNodeValidator {
  isCssNode(node: TranslatorNode): node is CSSNode {
    const invalidProperties: InvalidTranslatorNodeProperties = {};

    if (node.type !== TranslatorNodeTypes.CSS) invalidProperties.type = 'Invalid type';

    if (node.prev != null) invalidProperties.prev = 'Invalid prev';
    if (node.next != null) invalidProperties.next = 'Invalid next';

    if (node.sourceParams.code != null && typeof node.sourceParams.code !== 'string')
      invalidProperties.sourceParams = 'Invalid sourceParams.code';

    if (Object.keys(invalidProperties).length > 0) {
      throw new ValidatorNodeError('Invalid CSS Node', invalidProperties, ValidatorErrorTypes.INVALID_CSS_NODE);
    }

    return true;
  }
}
