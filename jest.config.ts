// eslint-disable-next-line import/no-anonymous-default-export
export default {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '**/?(*.)+(spec|test).[tj]s?(x)',
    '!src/**/stories.tsx',
    '!src/pages/**/*.tsx',
    '!src/styles/**/*.ts',
    '!src/types/**/*.d.ts',
    '!src/**/mock.ts'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setupTests.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  moduleNameMapper: {
    '^styled-components':
      '<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js'
  }
}
