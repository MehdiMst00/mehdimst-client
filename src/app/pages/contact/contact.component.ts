import { Component, OnInit } from '@angular/core';
import { PreloaderComponent } from 'src/app/shared/preloader/preloader.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
  public hide: boolean;

  constructor() {}

  ngOnInit(): void {
    this.hide = PreloaderComponent.flag;
  }
}
