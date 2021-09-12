module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transform: {
    '^.+\\.vue$': 'vue-jest'
  },
  moduleNameMapper: {
    'c@/(.*)': '<rootDir>/src/ts/components/$1',
    't@/(.*)': '<rootDir>/src/ts/$1',
    '@/(.*)': '<rootDir>/src/$1'
  }
}
