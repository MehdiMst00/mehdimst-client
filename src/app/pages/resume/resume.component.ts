import { Component, OnInit } from '@angular/core';
import { PreloaderComponent } from 'src/app/shared/preloader/preloader.component';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
})
export class ResumeComponent implements OnInit {
  public hide: boolean;

  constructor() {}

  ngOnInit(): void {
    this.hide = PreloaderComponent.flag;
  }
}
