import {TranslatorNode} from 'src/Node/types';
import {InvalidTranslatorNodeProperties, ValidatorErrorTypes} from '../types';
import {ValidatorNodeError} from '../errors/ValidatorNodeError';

export class BaseNodeValidator {
  isNode(node: TranslatorNode): node is TranslatorNode {
    const invalidProperties: InvalidTranslatorNodeProperties = {};

    if (typeof node.id !== 'string') invalidProperties.id = 'Invalid id';
    if (typeof node.name !== 'string') invalidProperties.name = 'Invalid name';
    if (typeof node.type !== 'string') invalidProperties.type = 'Invalid type';
    if (typeof node.sourceParams !== 'object') invalidProperties.sourceParams = 'Invalid sourceParams';

    if (Object.keys(invalidProperties).length > 0) {
      throw new ValidatorNodeError('Invalid Node', invalidProperties, ValidatorErrorTypes.INVALID_NODE);
    }

    return true;
  }
}
