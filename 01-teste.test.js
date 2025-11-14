const {soma, texto, multi} = require('./01-teste')

test(
    'testando a função soma', () => {
        expect(soma(1,2)).toBe(3)
    }
)

test(
    'testando a função texto', () => {
        expect(texto("Cristiano")).toBe("Boa noite Cristiano em que posso te ajudar hoje?")
    }
)

test(
    'testando a função multi', () => {
        expect(multi(1,2)).toBe(2)
    }
)