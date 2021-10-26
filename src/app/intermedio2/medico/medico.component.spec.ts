import { TestBed, ComponentFixture } from "@angular/core/testing";
import { MedicoComponent } from './medico.component';

describe('MedicoComponent', () => {
    let component: MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [MedicoComponent],
        });

        fixture = TestBed.createComponent( MedicoComponent );
        component = fixture.componentInstance;
    });

    it('Debe crearse el componente', () => {
        expect( component ).toBeTruthy();
    });
    
    it('Debe retornar nombre del médico', () => {
        const nombre = 'Juan Daniel'
        const resp = component.saludarMedico(nombre);
        expect( resp ).toContain(nombre);
    });
})