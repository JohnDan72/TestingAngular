import { incrementar } from "./numeros";


describe('Pruba de numbers', () => {
    it('Must supply 100', () => {
        const numTest = 300;
        const resp = incrementar(numTest);
        expect( resp ).toBe( 100 );
    });
    it('Must supply number + 1', () => {
        const numTest = 45;
        const resp = incrementar(numTest);
        expect( resp ).toBe( numTest + 1 );
    });
    
    it('Must supply a number', () => {
        const numTest = 74;
        const resp = incrementar(numTest);

        expect( resp ).toBeLessThan( 101 );
        expect( resp ).toBeGreaterThan( 0 );
    });
})