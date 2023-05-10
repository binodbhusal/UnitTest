const Calculator = require('./calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test('should return the sum of two positive numbers', () => {
    expect(calculator.add(4, 3)).toBe(7);
  });
  test('should return the sum of positive and negativenumbers', () => {
    expect(calculator.add(4, 3)).toBe(7);
  });
  test('should return the subtract of positive and negativenumbers', () => {
    expect(calculator.subtract(5, 5)).toBe(0);
  });
  test('should return the subtract of negative numbers and zero', () => {
    expect(calculator.subtract(-5, 0)).toBe(-5);
});
    test('should return the subtract of negative and positive enumbers', () => {
        expect(calculator.subtract(-5, 2)).toBe(-7);
  });
  test('should return multiply of two positive numbers', () => {
    expect(calculator.multiply(5, 2)).toBe(10);
});
    test('should return multiply of two negative and positive numbers', () => {
    expect(calculator.multiply(-5, 2)).toBe(-10);
});
});
