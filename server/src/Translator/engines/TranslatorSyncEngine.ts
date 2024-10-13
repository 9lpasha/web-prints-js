/* eslint-disable prefer-const */
import {CSSNode, HTMLButtonNode, TranslatorNode, TranslatorNodeTypes} from 'src/Node/types';
import {TranslatorEngine, TranslatorResult} from '../types';
import {WithValidator} from './WithValidator';
import {PromiseMonad} from 'src/types/global';
import {SyncPromise} from 'src/SyncPromise/SyncPromise';
import {copyTemplate, getTemplateReplaceKey, templates} from '../templates/templates';

const isHTMLButtonNode = (node: TranslatorNode): node is HTMLButtonNode => {
  return node.type === TranslatorNodeTypes.HTML_BUTTON_ELEMENT;
};

const isCSSNode = (node: TranslatorNode): node is CSSNode => {
  return node.type === TranslatorNodeTypes.CSS;
};

export class TranslatorSyncEngine extends WithValidator implements TranslatorEngine {
  translate(nodes: TranslatorNode[]): PromiseMonad<TranslatorResult> {
    const promises: PromiseMonad<boolean>[] = [];

    for (const node of nodes) {
      promises.push(this.validator.isNode(node));
    }

    let translatorResult: TranslatorResult = {
      html: '',
      css: '',
      js: '',
    };

    const {promise, resolve, reject} = SyncPromise.withResolvers<TranslatorResult>();

    // Проверка что все ноды валидные
    SyncPromise.all(promises)
      .then(() => {
        for (const node of nodes) {
          if (isHTMLButtonNode(node)) {
            translatorResult = this.translateHtmlButtonNode(node, translatorResult);
          }
        }

        resolve(translatorResult);
      })
      .catch(reject);

    return promise;
  }

  translateHtmlButtonNode(htmlButtonNode: HTMLButtonNode, translatorResult: TranslatorResult): TranslatorResult {
    let {template, keys} = copyTemplate(templates[htmlButtonNode.type]);

    const nodeKeys = Object.keys(htmlButtonNode.sourceParams);

    for (const key of nodeKeys) {
      if (keys[key]) {
        if (key === 'text' && typeof htmlButtonNode.sourceParams[key] === 'string') {
          template = template.replace(getTemplateReplaceKey(key), htmlButtonNode.sourceParams[key]);

          delete keys[key];
          continue;
        }

        const paramValue = htmlButtonNode.sourceParams[key];

        if (key === 'css' && Array.isArray(paramValue) && paramValue.every(isCSSNode)) {
          const className = 'uuid';
          const cssTemplate = this.getStringCssNodes(paramValue, className);

          template = template.replace(getTemplateReplaceKey(key), ` class="${className}"`);

          translatorResult.css = translatorResult.css += cssTemplate;
        }
      }
    }

    const templateKeys = Object.keys(keys);

    for (const key of templateKeys) {
      template = template.replace(getTemplateReplaceKey(key), '');
    }

    translatorResult.html = translatorResult.html += template;

    return translatorResult;
  }

  getStringCssNodes(nodes: CSSNode[], className: string): string {
    const copyNodes = [...nodes];

    const firstNode = copyNodes.shift();

    if (!firstNode) return;

    let {template, keys} = copyTemplate(templates[firstNode.type]);

    for (const key of Object.keys(keys)) {
      if (key === 'className') {
        template = template.replace(getTemplateReplaceKey(key), className);
        continue;
      }

      if (key === 'code') {
        template = template.replace(getTemplateReplaceKey(key), firstNode.sourceParams.code.trim() || '');
        continue;
      }

      if (key === 'nextCode') {
        template = template.replace(
          getTemplateReplaceKey(key),
          copyNodes.reduce((acc, node) => acc + ` ${node.sourceParams.code.trim()}` || '', ''),
        );
        continue;
      }
    }

    return template;
  }
}
