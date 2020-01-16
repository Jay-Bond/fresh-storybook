import Vue from 'vue';
import { addParameters, addDecorator } from '@storybook/vue';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

import '../src/assets/styles/normalize.css';
import '../src/assets/styles/animate.css';
import '../src/assets/styles/_variables.scss';
import '../src/assets/styles/global.scss';

/* Global Decorators */
addDecorator(withA11y)
addDecorator(
  withKnobs({
    escapeHTML: false,
  }),
)

/* Addon Parameters */
addParameters({
  docs: {
    inlineStories: true,
    iframeHeight: '60px',
  },
  backgrounds: [
	  { name: 'Light', value: '#fefefe', default: true },
	  { name: 'Dark', value: '#222' },
	],
})
