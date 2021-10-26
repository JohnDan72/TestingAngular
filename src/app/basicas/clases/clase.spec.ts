import { Jugador } from "./clase"

describe('Puebas clases', () => {
    const jugador = new Jugador();
    
    beforeAll( () => {
        // console.log("Before all");
    });
    beforeEach( () => {
        // console.log("Before each");
        jugador.hp = 100
    });
    afterAll( () => {
        // console.log("After all");
    });
    afterEach( () => {
        // console.log("After each");
    });

    it('Debe retornar 80 hp si recibe 20 de daño', () => {
        const resp = jugador.recibeDanio(20);

        expect( resp ).toBe(80);
    });

    it('Debe retornar 50 hp si recibe 50 de daño', () => {

        const resp = jugador.recibeDanio(50);

        expect( resp ).toBe(50);
    });

    it('Debe retornar 0 hp si recibe > 100 de daño', () => {
        const resp = jugador.recibeDanio(120);

        expect( resp ).toBe(0);
    });
})