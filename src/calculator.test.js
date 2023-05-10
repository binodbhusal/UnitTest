const Calculator = require('./calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test('should return the sum of two positive numbers', () => {
    expect(calculator.add(4, 3)).toBe(7);
  });
  test('should return the sum of positive and negative numbers', () => {
    expect(calculator.add(4, -3)).toBe(1);
  });
});
