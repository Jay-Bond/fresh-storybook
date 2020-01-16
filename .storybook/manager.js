import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

const theme = create({
  base: 'dark',
  
  colorPrimary: 'hotpink',
  colorSecondary: 'deepskyblue',
  
  brandImage: 'https://placehold.it/350x150',
  brandUrl: 'https://example.com',
  brandTitle: 'Example Brand Title',
  gridCellSize: 12,
});

addons.setConfig({
  showRoots: true,
  showPanel: true,
  sortStoriesByKind: true,
  panelPosition: 'bottom',
  theme,
});