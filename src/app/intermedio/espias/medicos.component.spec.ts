import { Observable, from, empty, throwError } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';


describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService(null);

    beforeEach( () => {
        componente = new MedicosComponent( servicio );
    });


    it('Debe cargar los médicos', () => {
        const medicos = ['medico 1','medico 2','medico 3'];
        spyOn( servicio , 'getMedicos').and.callFake( ():Observable<any> => {
            let fakeObserver = new Observable((obs) => {
                obs.next(medicos);
                obs.complete();
            })
            return fakeObserver;
        })
        componente.ngOnInit();
        expect( componente.medicos.length ).toBeGreaterThan(0);
    });

    it('Se llama agregarMedico function', () => {
        
        const mispy = spyOn( servicio , 'agregarMedico').and.callFake( medico => {
            return new Observable((obs) => {
                obs.next([]);
                obs.complete();
            })
        })
        componente.agregarMedico();
        expect( mispy ).toHaveBeenCalled();
    });

    it('Debe agregar un nuevo médico al array', () => {
        const med = {id: 1 , nombre: 'Juancho'}
        const mispy = spyOn( servicio , 'agregarMedico').and.returnValue( new Observable((obs) => {
            obs.next(med);
            obs.complete();
        }))
        componente.agregarMedico();
        expect( componente.medicos.indexOf( med ) ).toBeGreaterThanOrEqual(0);
    });

    it('Si falla la adición, debe ser error del servicio', () => {
        const miError = 'No se agregó medico'
        spyOn( servicio , 'agregarMedico').and.returnValue( throwError(miError))
        componente.agregarMedico();
        expect( componente.mensajeError ).toBe(miError);
    });

    it('Debe llamar al servidor para borrar un médico', () => {
        spyOn( window , 'confirm').and.returnValue(true); //simular el confirm
        const mispy = spyOn( servicio , 'borrarMedico')
                        .and.returnValue(   new Observable((obs) => { //empty observable
                                                obs.next([]);
                                                obs.complete();
                                            })
                                        )
        componente.borrarMedico('1');
        expect( mispy ).toHaveBeenCalledWith('1');
    });

    it('NO debe llamar al servidor para borrar un médico', () => {
        spyOn( window , 'confirm').and.returnValue(false); //simular el confirm
        const mispy = spyOn( servicio , 'borrarMedico')
                        .and.returnValue(   new Observable((obs) => { //empty observable
                                                obs.next([]);
                                                obs.complete();
                                            })
                                        )
        componente.borrarMedico('1');
        expect( mispy ).not.toHaveBeenCalledWith('1');
    });


});
