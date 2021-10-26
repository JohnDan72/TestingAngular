import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, empty, Subject } from 'rxjs';

import { RouterMedicoComponent } from './router-medico.component';

class FakeRoute {
  navigate(params){

  }
}
class FakeActivated{
  // params: Observable<any> = new Observable( obs => obs.complete());
  private subject = new Subject();

  push( valor ) {
    this.subject.next( valor );
  }

  get params(){ return this.subject.asObservable(); }

}


describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterMedicoComponent ],
      providers: [
        {provide: Router, useClass: FakeRoute},
        {provide: ActivatedRoute , useClass: FakeActivated}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe redireccionar a médico cuando se guarde', () => {
    const router = TestBed.get(Router);
    const mispy = spyOn( router, 'navigate');

    component.guardarMedico();

    expect( mispy ).toHaveBeenCalledWith(['medico','123'])
  });

  it('Debe de colocar el id = nuevo', () => {
    const activated: FakeActivated = TestBed.get(ActivatedRoute);

    activated.push({ id: 'nuevo'});

    expect(component.id).toBe('nuevo');
  });
});
