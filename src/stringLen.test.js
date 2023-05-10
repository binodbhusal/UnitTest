const { hasUncaughtExceptionCaptureCallback } = require('process');
const strLen = require('./stringLen')
test('Counted string length Hello=5', () => {
expect(strLen('Hello')).toBe(5);
});
