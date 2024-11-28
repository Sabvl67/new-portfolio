import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { AboutComponent } from "./about/about.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { ProjectComponent } from "./project/project.component";
import { ContactComponent } from "./contact/contact.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, AboutComponent, NavBarComponent, ProjectComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cindy-portfolio';
}
