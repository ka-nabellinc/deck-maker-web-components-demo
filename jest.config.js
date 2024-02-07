const config = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(t|j)s$': ['ts-jest', { autoMapModuleNames: true }],
  },
  "transformIgnorePatterns": [
    "/node_modules/(?!lit|@lit).+\\.js",
  ]
};

export default config
