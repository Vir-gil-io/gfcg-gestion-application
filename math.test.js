const multiplicar = require('./math');

test("Multiplicar 3 por 4 y el resultado es 12", () => {
    expect(multiplicar(3, 4)).toBe(12);
});

test("Multiplicar 2 por 10 y el resultado es 20", () => {
    expect(multiplicar(2, 10)).toBe(20);
});

test("Multiplicar 3 por 9 y el resultado es 27", () => {
    expect(multiplicar(3, 9)).toBe(27);
});