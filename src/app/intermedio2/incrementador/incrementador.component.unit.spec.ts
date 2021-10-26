import { IncrementadorComponent } from './incrementador.component';
describe('Unit testing for Incrementador Component', () => {
    let component: IncrementadorComponent;

    beforeEach( () => {
        component = new IncrementadorComponent();
    });

    it('No debe pasar de 100 el progreso', () => {
        component.progreso = 40;
        component.cambiarValor(5);

        expect( component.progreso ).toBe(45)
    })
})