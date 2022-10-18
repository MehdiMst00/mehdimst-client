import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PreloaderService {
  public flag: boolean = false;
  constructor() {}
}
