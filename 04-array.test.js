const adicionaItem = require('./04-array')

test(
    'Teste de lista', () => {
        expect(adicionaItem([], 1)).toEqual([1])
    }
)