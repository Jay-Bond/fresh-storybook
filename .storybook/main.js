module.exports = {
  stories: ['../stories/**/*.stories.(js|mdx)'],
  addons: [
  	'@storybook/addon-actions', 
  	'@storybook/addon-links',
  	'@storybook/addon-knobs',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
    '@storybook/addon-backgrounds',
  	{
  		name: '@storybook/addon-docs',
  		options: {
        babelOptions: {
          presets: [
            [
              '@vue/cli-plugin-babel/preset',
              {
                jsx: false
              }
            ]
          ]
        }
      }
  	}
  ],
};