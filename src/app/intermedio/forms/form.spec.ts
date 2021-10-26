import { FormBuilder } from "@angular/forms";
import { LoginForm } from "./form";


describe('Pruebas forulario reactivo', () => {
    let formComp: LoginForm;

    beforeEach(() => {
        formComp = new LoginForm( new FormBuilder() )
    });

    it('Debe crear un form con 2 campos', () => {

        expect( formComp.loginform.contains('user')).toBeTruthy();
        expect( formComp.loginform.contains('password')).toBeTruthy();
    });

    it('User required', () => {
        const control = formComp.loginform.get('user');

        control.setValue('');

        expect( control.valid ).toBeFalsy();
    });

    it('User min and max length', () => {
        const control = formComp.loginform.get('user');

        control.setValue('a');

        expect( control.valid ).toBeFalsy();
    })
})