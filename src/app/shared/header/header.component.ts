import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  public toggle: boolean = false;
  private window: Window | null;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.window = this.document.defaultView;
  }

  ngOnInit(): void {
    if ((this.window?.innerWidth ?? 0) >= 910) {
      this.toggle = true;
    }
  }

  isMedium(): boolean {
    return (this.window?.innerWidth ?? 0) <= 910;
  }

  onToggleClick(): void {
    if (this.isMedium()) {
      this.toggle = !this.toggle;
    }
  }
}
