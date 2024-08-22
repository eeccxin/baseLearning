const assert = require('assert');

describe('sayHello', function() {
  it('should log "Hello, World!" to the console', function() {
    // Mock console.log to capture output
    let logOutput = '';
    const originalLog = console.log;
    console.log = (...args) => {
      logOutput = args.join(' ');
    };

    sayHello();

    // Restore console.log
    console.log = originalLog;

    assert.strictEqual(logOutput, "Hello, World!");
  });
});