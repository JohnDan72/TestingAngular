
import { mensaje } from './string';

describe('Pruebas de Strings', () => {
    it('Debe regresar un string', () => {
        // expect().toBe();
        const response = mensaje('Juan Daniel');

        expect( typeof response ).toBe('string');
    });
    it('Debe retornar un saludo con el nombre enviado', () => {
        const nombre = 'Juan Daniel'
        const response = mensaje(nombre);


        expect( response ).toContain(nombre);
    });
});
