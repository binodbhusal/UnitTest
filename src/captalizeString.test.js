const capatalizeString = require('./captalizeString');
const captalize = require('./captalizeString');

test ('Capatalize strin of first letter', () => {
    const input ='hello';
    const expectedOutput = 'Hello';
    const result = capatalizeString(input)
    expect(result).toBe(expectedOutput);
})