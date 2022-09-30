import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  public toggle: boolean = false;

  ngOnInit(): void {
    if (window.innerWidth >= 768) {
      this.toggle = true;
    }
  }

  isMedium(): boolean {
    return window.innerWidth <= 768;
  }

  onToggleClick(): void {
    if (window.innerWidth <= 768) {
      this.toggle = !this.toggle;
    }
  }
}
