import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/users/user.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent{

  form: FormGroup;
  model: any;
  
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private modalService: NgbModal,
    private router: Router
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

  

  open(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  onRegisterSubmit() {
    this.userService.create(this.model)
    .subscribe(
        data => {
            this.router.navigate(['/login']);
        })
      
    }
}