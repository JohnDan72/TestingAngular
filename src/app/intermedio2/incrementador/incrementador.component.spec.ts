import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { element } from 'protractor';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Crear IncrementadorComponent', () => {
        expect(component).toBeTruthy();
    });

    it('Iclude leyenda and progreso', () => {
        // ejemplos de By calls
        // By.css('#id_element');
        // By.css('.class_name');
        // By.directive();
        component.leyenda = 'Progreso de carga';
        fixture.detectChanges(); //disparar la detección de cambios
        // get first element with h3 tag
        const elem:HTMLElement =    fixture
                                    .debugElement
                                    .query( By.css('h3') )
                                    .nativeElement;

        expect( elem.innerHTML ).toContain('Progreso de carga');
    });

    it('Debe mostrar en input valor de progreso', () => {
        component.cambiarValor(5);
        fixture.detectChanges();
        fixture.whenStable().then( () => {
            const input = fixture.debugElement.query( By.css('input') );
            const elem: HTMLInputElement = input.nativeElement;
    
            expect( elem.value ).toBe('55');

        })
    });

    it('Debe incrementar/decrementar en 5 con un click en los botones', () => {
        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));

        botones[0].triggerEventHandler('click',null);
        expect(component.progreso).toBe(45);

        botones[1].triggerEventHandler('click',null);
        expect(component.progreso).toBe(50);
    });

    it('Debe cambiar el valor de progreso en el HTML', () => {
        // const oldValue = component.progreso;
        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
        botones[0].triggerEventHandler('click',null);
        fixture.detectChanges();
        const h3_element: HTMLElement = fixture.debugElement.query( By.css('h3') ).nativeElement;
    

        expect(h3_element.innerHTML).toContain('45');

    })

});
