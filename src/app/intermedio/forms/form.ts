import { FormBuilder, FormGroup, Validators } from "@angular/forms";


export class LoginForm{

    public loginform: FormGroup = this.fb.group({
        user: ['',[Validators.required , Validators.minLength(3), Validators.maxLength(30)]],
        password: ['',[Validators.required , Validators.minLength(8)]]
    })
    constructor(private fb: FormBuilder){}
    
}