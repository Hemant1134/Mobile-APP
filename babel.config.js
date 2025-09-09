module.exports = {
  presets: ['@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './src',
          '@/components': './src/components',
          '@/screens': './src/screens',
          '@/redux': './src/redux',
          '@/services': './src/services',
          '@/types': './src/types',
          '@/utils': './src/utils',
          '@/constants': './src/constants',
        },
      },
    ],
  ],
};
