import { ContactMe } from './../../core/dtos/contacts/contact.me';
import { ContactService } from './../../core/services/contact.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PreloaderComponent } from 'src/app/shared/preloader/preloader.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
  public hide: boolean;
  public contactForm: FormGroup;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.hide = PreloaderComponent.flag;
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
          if(result) {
            // Show Notification
          }
          console.log(result);
          this.contactForm.reset();
        });

    }
  }
}
