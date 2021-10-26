import { Jugador2 } from "./jugador2"

describe('Prueba emitter', () => {
    let jugador: Jugador2;

    beforeEach( () => {
        jugador = new Jugador2();
    })
    it('Debe regresar el hp como evento', () => {
        let newHP = 0;
        jugador.hpCambia.subscribe( hp => {
            newHP = hp;
        });

        jugador.recibeDanio(150);

        expect( newHP ).toBe(0)
    });

    it('Debe regresar el hp como evento y sobrevivir', () => {
        let newHP = 0;
        jugador.hpCambia.subscribe( hp => {
            newHP = hp;
        });

        jugador.recibeDanio(50);

        expect( newHP ).toBe(50)
    })
})