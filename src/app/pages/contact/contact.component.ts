import { ContactMe } from './../../core/dtos/contacts/contact.me';
import { ContactService } from './../../core/services/contact.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PreloaderService } from 'src/app/core/services/preloader.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
  public hide: boolean;
  public contactForm: FormGroup;

  constructor(
    private contactService: ContactService,
    private toastr: ToastrService,
    private preloaderService: PreloaderService
  ) {}

  ngOnInit(): void {
    this.hide = this.preloaderService.flag;
    this.contactForm = new FormGroup({
      fullName: new FormControl(null, [
        Validators.required,
        Validators.maxLength(200),
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.maxLength(200),
      ]),
      subject: new FormControl(null, [
        Validators.required,
        Validators.maxLength(200),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.maxLength(800),
      ]),
    });
  }

  submitContactForm(): void {
    if (this.contactForm.valid) {
      const contactMe: ContactMe = new ContactMe(
        this.contactForm.controls['fullName'].value,
        this.contactForm.controls['email'].value,
        this.contactForm.controls['subject'].value,
        this.contactForm.controls['description'].value
      );

      this.contactService
        .postContactMeMessage(contactMe)
        .subscribe((result) => {
          if (result.success) {
            this.toastr.success(
              'Your message successfully sent!',
              'Success Message'
            );
            this.contactForm.reset();
            return;
          }
          this.toastr.error('An error occurred', 'Error Message');
        });
    }
  }
}
