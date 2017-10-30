import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/users/user.service';
import { Router } from '@angular/router';
// import { User } from '../../../models/users';
import { AuthenticationService, User } from '../../../services/authentication.service';

@Component({
  selector: 'app-homenoreg',
  templateUrl: './homenoreg.component.html',
  styleUrls: ['./homenoreg.component.scss']
})
export class HomenoregComponent implements OnInit {

  // @Input('user') user:User;
  // newUser: User = new User();

  public user = new User('','');
  public errorMsg = '';

  // @Output() usuarioAgregado = new EventEmitter<User>();
    form: FormGroup;
    name: string;
    username: string;
    email: string;
    password: string;
    id:string;
    image:string;
    
    ngOnInit() {}
  
    constructor(
      private formBuilder: FormBuilder,
      private userService: UserService,
      private router: Router,
      private service: AuthenticationService
    ) {
      this.createForm();
    }
  
   
    createForm() {
      this.form = this.formBuilder.group({
        name: ['', Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(40),
          this.validateName
        ])],
        email: ['', Validators.compose([
          Validators.required, 
          Validators.minLength(5),
          Validators.maxLength(30), 
          this.validateEmail 
        ])],
        
        username: ['', Validators.compose([
          Validators.required, 
          Validators.minLength(3), 
          Validators.maxLength(15), 
          this.validateUsername 
        ])],
        
        password: ['', Validators.compose([
          Validators.required, 
          Validators.minLength(8), 
          Validators.maxLength(35), 
          this.validatePassword 
        ])],
        
        confirm: ['', Validators.required] 
      }, { validator: this.matchingPasswords('password', 'confirm') });  
    }
  
    validateName(controls) {
      const regExp = new RegExp (/^[a-zA-Z]+$/);
      if (regExp.test(controls.value)) {
        return null;
      } else {
        return { 'validateName': true }
      }
    }
    
    
    validateEmail(controls) {
      
      const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      
      if (regExp.test(controls.value)) {
        return null; 
      } else {
        return { 'validateEmail': true } 
      }
    }
  
    
    validateUsername(controls) {
      
      const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
      
      if (regExp.test(controls.value)) {
        return null; 
      } else {
        return { 'validateUsername': true } 
      }
    }
  
    
    validatePassword(controls) {
      
      const regExp = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/);
      
      if (regExp.test(controls.value)) {
        return null; 
      } else {
        return { 'validatePassword': true } 
      }
    }
  
    
    matchingPasswords(password, confirm) {
      return (group: FormGroup) => {
        
        if (group.controls[password].value === group.controls[confirm].value) {
          return null; 
        } else {
          return { 'matchingPasswords': true } 
        }
      }
    }
  
    // onRegisterSubmit(user:User) {
    // let user1 = this.usuarioAgregado.emit({name: this.name, username: this.username, email: this.email, password:this.password, id: this.id, image: this.image});
    //   console.log(user);
    //   console.log(user1);
    //   console.log(this.usuarioAgregado);
    //   // this.userService.createUser(user);
    //   }

      login() {
        if(!this.service.login(this.user)){
            this.errorMsg = 'Failed to login';
        }
    }
  }