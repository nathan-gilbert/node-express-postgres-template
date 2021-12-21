import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  automock: true,
  collectCoverage: true,
  coverageReporters: ['text', 'lcov', 'text-summary'],
}
export default config
