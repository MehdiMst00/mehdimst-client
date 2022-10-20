import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  public toggle: boolean = false;
  private window: Window;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.window = this.document.defaultView;
  }

  ngOnInit(): void {
    if (this.window.innerWidth >= 910) {
      this.toggle = true;
    }
  }

  isMedium(): boolean {
    return this.window.innerWidth <= 910;
  }

  onToggleClick(): void {
    if (this.isMedium()) {
      this.toggle = !this.toggle;
    }
  }
}
