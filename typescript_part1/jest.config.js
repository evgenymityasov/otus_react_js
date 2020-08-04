module.exports = {
    clearMocks: true,
    coverageDirectory: "coverage",
    moduleDirectories: ["node_modules", "src"],
    coverageThreshold: {
      global: {
        branches: 75,
        functions: 75,
        lines: 75,
        statements: -85,
      },
    },
  };