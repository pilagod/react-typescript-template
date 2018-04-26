// https://basarat.gitbooks.io/typescript/docs/testing/jest.html
module.exports = {
  'roots': [
    '<rootDir>/src'
  ],
  'transform': {
    '\\.tsx?$': 'ts-jest'
  },
  'testRegex': '\\.(test|spec)\\.tsx?$',
  'moduleFileExtensions': [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node'
  ],
  'setupTestFrameworkScriptFile': '<rootDir>/src/setupEnzyme.ts'
}
