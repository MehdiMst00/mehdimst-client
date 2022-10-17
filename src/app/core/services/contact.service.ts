import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactMe } from '../dtos/contacts/contact.me';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  public postContactMeMessage(contactMe: ContactMe): Observable<boolean> {
    return this.http.post<boolean>('contact-me', contactMe);
  }
}
