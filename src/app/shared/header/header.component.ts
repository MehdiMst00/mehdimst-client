import { Component, OnInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  public toggle: boolean = false;

  ngOnInit(): void {
    // Initialize the `PerfectScrollbar` plugin
    new PerfectScrollbar(document.getElementById('header'), {
      wheelSpeed: 0.2,
      wheelPropagation: true,
    });

    if (window.innerWidth >= 910) {
      this.toggle = true;
    }
  }

  isMedium(): boolean {
    return window.innerWidth <= 910;
  }

  onToggleClick(): void {
    if (this.isMedium()) {
      this.toggle = !this.toggle;
    }
  }
}
