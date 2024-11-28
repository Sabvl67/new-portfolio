import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  constructor ( private ViewportScroller: ViewportScroller) {}

  navLink: string[] = ['About', 'Experience', 'Projects', 'Contact']

  scrollTo(section: string) {
    let elementId = section.toLowerCase().replace(' ', '-');
    this.ViewportScroller.scrollToAnchor(elementId);
  }
}
