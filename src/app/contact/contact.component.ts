import {ConnectionService} from '../connection.service';
import {Component, OnInit} from '@angular/core';
import {Contact} from '../models/contact.model';
import {Subject} from '../models/subject.model';
import {App} from '../models/app.model';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatSnackBar} from '@angular/material/snack-bar'; 


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(private connectionService: ConnectionService, private _snackBar: MatSnackBar) {
  }

  responseStatus: string;
  contact = new Contact;
  selectedValue: string;

  ngOnInit() {

  }

  onSubmit(contactForm: NgForm) {
    // alert("Thanks for submitting! Data: " + JSON.stringify(this.contact));
    this.connectionService.sendMessage(this.contact).subscribe(resp => {
      console.log(resp);
        contactForm.resetForm();
        this.emailFormControl.reset()
    });
  }

  
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}