
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';


interface EventItem {
  status?: string;
  date?: string;
  description?: string;
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
        { 
          status: 'Software Developer Intern', 
          date: 'Sep 2024 - Apr 2025', 
          description: 'Worked on developing and maintaining web applications, collaborating with cross-functional teams to deliver high-quality software solutions.', 
          icon: 'pi pi-check', 
          color: '#607D8B' 
        },
        { 
          status: 'Mitacs Globallink Internship Mentor', 
          date: 'Apr 2024 - Aug 2024', 
          description: 'Mentored interns in research projects, providing guidance and support to help them achieve their academic and professional goals.', 
          icon: 'pi pi-shopping-cart', 
          color: '#4caf50' 
        },
        { 
          status: 'Fintech Cadence Trainee', 
          date: 'Mar 2024 - May 2024', 
          description: 'Participated in a training program focused on financial technology, gaining insights into the latest trends and technologies in the fintech industry.', 
          icon: 'pi pi-shopping-cart', 
          color: '#FF9800' 
        },
        { 
          status: 'Undergraduate Research Assistant', 
          date: 'Oct 2023 - Aug 2024', 
          description: 'Assisted in research projects, conducting experiments, analyzing data, and contributing to academic publications.', 
          icon: 'pi pi-cog', 
          color: '#673AB7' 
        },
        { 
          status: 'Machine Learning Fellow', 
          date: 'May 2023 - Jun 2023', 
          description: 'Understood the fundamentals of machine learning to approach problems in new ways, offer answers to important questions, and collaborate to create AI tools that benefit society. Explored the field of artificial intelligence with the assistance of speakers and lecturers, and narrowed my interests with guidance from knowledgeable mentors and teaching assistants.', 
          icon: 'pi pi-shopping-cart', 
          color: '#9C27B0' 
        }
      ];
  }
}
