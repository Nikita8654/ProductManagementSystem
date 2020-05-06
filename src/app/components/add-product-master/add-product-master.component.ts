import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {User} from '../../user.model';
import {UserService} from '../../user.service';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FormComponentBase} from '../infrastructure/form-component-base';
import {CrossFieldErrorMatcher} from '../infrastructure/cross-field-error-matcher';
import {passwordsDoNotMatch} from '../infrastructure/passwords-do-not-match.validator';

@Component({
  selector: 'app-add-product-master',
  templateUrl: './add-product-master.component.html',
  styleUrls: ['./add-product-master.component.css']
})
export class AddProductMasterComponent extends FormComponentBase implements OnInit, AfterViewInit {
  /*success: boolean;
  productMaster: User;
  hide = true;
  productMasterForm: FormGroup;

  constructor(private userService: UserService, private router: Router, private fb: FormBuilder) {
    this.productMasterForm = fb.group({
      username: new FormControl(null, Validators.required),
      phoneNo: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      cpassword: new FormControl(null, Validators.required),
    });
  }

  getErrorMessage() {
    if (this.productMasterForm.get('email').hasError('required')) {
      return 'You must enter a value';
    }

    return this.productMasterForm.get('email').hasError('email') ? 'Not a valid email' : '';
  }
  ngOnInit(): void {
    this.productMaster = new User();
  }

  onSubmit() {
    this.userService.addProductMaster(this.productMaster).subscribe((data) => {
      this.success = true;
      setTimeout(() => this.success = false, 3000);
    }, error => console.log(error));
    this.router.navigate(['']);
  }*/


  @ViewChild('email') firstItem: ElementRef;
  form!: FormGroup;
  hidePassword = true;
  errorMatcher = new CrossFieldErrorMatcher();

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    super();

    this.validationMessages = {
      email: {
        required: 'Email is required.',
        email: 'Email is not properly formatted.',
      },
      userName: {
        required: 'User name is required.',
        minlength: 'User name minimum length is 6.',
        maxlength: 'User name maximum length is 15.',
        pattern: ' Allowed characters letters, numbers only. No spaces.'
      },
      password: {
        required: 'Password is required.',
        minlength: 'Password minimum length is 6.',
        maxlength: 'Password maximum length is 15.',
        pattern: 'Password minimum length 6, requires one letter, one number, one special character !@#$%^&* no spaces.'
      },
      confirmPassword: {
        required: 'Confirm password is required.',
        minlength: 'Confirm password minimum length is 6.',
        maxlength: 'Confirm password maximum length is 15.',
        pattern: 'Confirm password minimum length 6, requires one letter, one number, one special character !@#$%^&* no spaces.',
        passwordsDoNotMatch: 'Passwords must match.'
      },

      passwordsGroup: {
        passwordsDoNotMatch: 'Passwords must match.'
      }
    };

    this.formErrors = {
      email: '',
      userName: '',
      password: '',
      confirmPassword: '',
      passwordsGroup: ''
    };
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email]],
      userName: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15),
        Validators.pattern('^[a-zA-Z0-9]*[a-zA-Z][a-zA-Z0-9]*$')]],
      passwordsGroup: this.formBuilder.group({
        password: ['', [
          Validators.required,
          Validators.maxLength(15),
          Validators.pattern('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$')]],
        confirmPassword: ['', [
          Validators.required,
          Validators.maxLength(15),
          Validators.pattern('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$')]],
      }, {validators: passwordsDoNotMatch})
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.firstItem.nativeElement.focus();
    }, 250);
    this.startControlMonitoring(this.form);
  }

  registerClicked(value: User) {
    console.log(this.form.value);
    const getPassword = this.form.get(['passwordsGroup', 'password']).value;
    const getEmail = this.form.get('email').value;
    const getUsername = this.form.get('userName').value;
    const user: User = {email: getEmail, password: getPassword, userId: '', userName: getUsername};
    this.userService.addUser(user).subscribe(data =>
      console.log(data), error => console.log(error));
    alert('Product Master added!');
    this.form.reset();
  }

}



