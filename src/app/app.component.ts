import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { AboutComponent } from "./about/about.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { ContactComponent } from "./contact/contact.component";
import { ProjectComponent } from "./project/project.component";
import { TechnologyComponent } from "./technology/technology.component";
import { ExperienceComponent } from "./experience/experience.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ButtonModule, AboutComponent, NavBarComponent, ContactComponent, ProjectComponent, TechnologyComponent, ExperienceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cindy-portfolio';
}
