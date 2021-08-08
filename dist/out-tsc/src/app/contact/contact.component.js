import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Contact } from '../models/contact.model';
import { FormControl, Validators } from '@angular/forms';
let ContactComponent = class ContactComponent {
    constructor(connectionService) {
        this.connectionService = connectionService;
        this.contact = new Contact;
        this.subjects = [
            { value: 'feedback', viewValue: 'Feedback' },
            { value: 'feature request', viewValue: 'Feature Request' },
            { value: 'report bug', viewValue: 'Report Bug' }
        ];
        this.emailFormControl = new FormControl('', [
            Validators.required,
            Validators.email,
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
    ngOnInit() {
    }
    onSubmit(contactForm) {
        // alert("Thanks for submitting! Data: " + JSON.stringify(this.contact));
        this.connectionService.sendMessage(this.contact);
        contactForm.resetForm();
        this.emailFormControl.reset();
    }
};
ContactComponent = __decorate([
    Component({
        selector: 'app-contact',
        templateUrl: './contact.component.html',
        styleUrls: ['./contact.component.scss'],
    })
], ContactComponent);
export { ContactComponent };
export class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
//# sourceMappingURL=contact.component.js.map