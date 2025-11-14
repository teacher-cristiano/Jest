const x = require('./02-condicional')

test(
    'test para aprovado', () => {
        expect(x(8)).toBe("Aprovado")
    }
)
