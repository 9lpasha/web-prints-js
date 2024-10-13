import {TranslatorNodeTypes} from 'src/Node/types';

export type Template = {
  template: string;
  keys: Record<string, boolean>;
};

export const templates: Record<TranslatorNodeTypes, Template> = {
  [TranslatorNodeTypes.HTML_BUTTON_ELEMENT]: {
    template: '<button{{css}}>{{text}}</button>',
    keys: {
      css: true,
      text: true,
    },
  },
  [TranslatorNodeTypes.CSS]: {
    template: '.{{className}} {{{code}}{{nextCode}}}',
    keys: {
      className: true,
      code: true,
      nextCode: true,
    },
  },
};

export function copyTemplate<T extends Template>(template: T): T {
  return {
    ...template,
    keys: {
      ...template.keys,
    },
  };
}

export function getTemplateReplaceKey(key: string) {
  return `{{${key}}}`;
}
