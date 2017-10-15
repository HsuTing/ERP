module.exports = {
  setupFiles: ['cat-jest'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/lib/',
    '/utils/'
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.js',
    '!**/public/**',
    '!**/node_modules/**',
    '!__tests__/**/utils/**'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: [
    'html',
    'text'
  ]
};
