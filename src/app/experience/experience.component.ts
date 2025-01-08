
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';


interface EventItem {
  status?: string;
  date?: string;
  icon?: string;
  color?: string;
  image?: string;
}
@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, TimelineModule, CardModule, ButtonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
index: any;
experiences: any;
  detailOnClick(experience:any) {
    experience.detailIsDisplayed=!experience.detailIsDisplayed;
  }
  events: EventItem[];

  constructor() {
      this.events = [
          { status: 'Machine Learning Fellow', date: 'May 2023 - Jun 2023', icon: 'pi pi-shopping-cart', color: '#9C27B0' },
          { status: 'Undergraduate Research Assistant', date: 'Oct 2023 - Aug 2024', icon: 'pi pi-cog', color: '#673AB7' },
          { status: 'Fintech Cadence Trainee', date: 'Mar 2024 - May 2024', icon: 'pi pi-shopping-cart', color: '#FF9800' },
          { status: 'Mitacs Globallink Internship Mentor', date: 'Apr 2024 - Aug 2024', icon: 'pi pi-shopping-cart', color: '#4caf50' },
          { status: 'Software Developer Intern', date: 'Sep 2024 - Apr 2025', icon: 'pi pi-check', color: '#607D8B' }
      ];
  }
}
