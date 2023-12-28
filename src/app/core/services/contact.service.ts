import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactMe } from '../dtos/contacts/contact.me';
import { ContactMeResponse } from '../dtos/contacts/contact.me.response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private http: HttpClient) {}

  public postContactMeMessage(
    contactMe: ContactMe
  ): Observable<ContactMeResponse> {
    return this.http.post<ContactMeResponse>('contact-me', contactMe);
  }
}
