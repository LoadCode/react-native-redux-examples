module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.ios.tsx',
          '.android.ts',
          '.android.tsx',
          '.ts',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@app': './src/app',
          '@assets': './src/app/assets',
          '@components': './src/app/components',
          '@constants': './src/app/constants',
          '@interfaces': './src/interfaces',
          '@redux': './src/redux',
        },
      },
    ],
  ],
};
