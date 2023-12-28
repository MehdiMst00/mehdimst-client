import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ContactService } from '../../core/services/contact.service';
import { PreloaderService } from '../../core/services/preloader.service';
import { ContactMe } from '../../core/dtos/contacts/contact.me';
import { HotToastService, Toast } from '@ngneat/hot-toast';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
  public hide: boolean = false;
  public contactForm!: FormGroup;

  constructor(
    private readonly contactService: ContactService,
    private readonly toast: HotToastService,
    private readonly preloaderService: PreloaderService
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

      const toastOption: any = {
        autoClose: true,
        position: 'bottom-right',
        dismissible: true,
        theme: 'snackbar',
        duration: 3000,
      };

      this.contactService
        .postContactMeMessage(contactMe)
        .subscribe((result) => {
          if (result.success) {
            this.toast.success('Your message successfully sent!', toastOption);
            this.contactForm.reset();
            return;
          }
          this.toast.error('An error occurred', toastOption);
        });
    }
  }
}
