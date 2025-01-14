
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
  attachment?: string;
  more?: string;
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
events: EventItem[];

  constructor() {
    this.events = [
      { 
        status: 'Software Developer Intern', 
        date: 'Sep 2024 - Apr 2025', 
        description: 'Worked on developing and maintaining web applications, collaborating with cross-functional teams to deliver high-quality software solutions.', 
        icon: 'pi pi-desktop', 
        color: '#607D8B',
        more: ''
      },
      { 
        status: 'Mitacs Globallink Internship Mentor', 
        date: 'Apr 2024 - Aug 2024', 
        description: ` Provided comprehensive support to a diverse group of international undergraduate students participating in the Mitacs Globalink program.<br> <br>
                       Collaborated with Mitacs and university staff to address any issues or concerns raised by GRIs and ensure a positive internship experience.`, 
        icon: 'pi pi-globe', 
        color: '#4caf50' 
      },
      { 
        status: 'Fintech Cadence Trainee', 
        date: 'Mar 2024 - May 2024', 
        description: 'Participated in a training program focused on financial technology, gaining insights into the latest trends and technologies in the fintech industry.', 
        attachment: 'https://www.linkedin.com/in/qanh-vo/overlay/1715816290079/single-media-viewer/?profileId=ACoAADH59J0BXd9XAr0sehlF-SD7IztDgn_GQoA',
        icon: 'pi pi-dollar', 
        color: '#FF9800' 
      },
      { 
        status: 'Undergraduate Research Assistant', 
        date: 'Oct 2023 - Aug 2024', 
        description: ' Conduct literature reviews on API alternatives, and social media analysis methodologies.<br> <br> Applying advanced data analysis techniques using Python, Pandas and NumPy, to extract meaningful insights and trends related to API alternatives and Social Media Listening.<br> <br>  Explored and experimented with machine learning models, incorporating OpenAI\'s GPT (Generative Pre-trained Transformer) for text generation and analysis.',
        icon: 'pi pi-graduation-cap', 
        color: '#673AB7' ,
        more: ''
      },
      { 
        status: 'Machine Learning Fellow', 
        date: 'May 2023 - Jun 2023', 
        description: 'Understood the fundamentals of machine learning to approach problems in new ways, offer answers to important questions, and collaborate to create AI tools that benefit society.<br> <br> Explored the field of artificial intelligence with the assistance of speakers and lecturers, and narrowed my interests with guidance from knowledgeable mentors and teaching assistants.', 
        icon: 'pi pi-microchip-ai',
        attachment:'https://www.ai4goodlab.com/news/project-reports/2024/02/15/plate-pal-2023-edmonton-accelerator-award-winner/',
        color: '#9C27B0' 
      }
    ];
}
}
