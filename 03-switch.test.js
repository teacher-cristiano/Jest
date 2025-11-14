const diaDaSemana = require('./03-switch')

test(
    'dias da semana válidos', () =>{
        expect(diaDaSemana(1)).toBe("Domingo");
        expect(diaDaSemana(2)).toBe("Segunda-feira");
        expect(diaDaSemana(3)).toBe("Terça-feira");
        expect(diaDaSemana(4)).toBe("Quarta-feira");
        expect(diaDaSemana(5)).toBe("Quinta-feira");
        expect(diaDaSemana(6)).toBe("Sexta-feira");
        expect(diaDaSemana(7)).toBe("Sábado");
    }
)

test(
    'teste para dia inválido', ()=>{
        expect(diaDaSemana(9)).toEqual("Dia inválido");
        expect(diaDaSemana("abc")).toEqual("Dia inválido");
    }
)