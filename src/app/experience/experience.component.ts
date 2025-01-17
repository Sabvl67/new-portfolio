import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

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
  imports: [
    CommonModule,
    TimelineModule,
    CardModule,
    ButtonModule,
    DialogModule,
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
  encapsulation: ViewEncapsulation.None
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
      description:
        'Worked on developing and maintaining web applications, collaborating with cross-functional teams to deliver high-quality software solutions.',
      icon: 'pi pi-desktop',
      color: '#607D8B',
      more: `
      OPG maps: Development and integration of Ontario Power Generation (OPG) mapping tools for enhanced project planning and execution.<br><br>
      Electronic WPLs and ITPs: Designed and implemented electronic Work Plans (WPLs) and Inspection Test Plans (ITPs) for seamless digital workflows.<br><br>
      Led Capstone Student TMU: Guided final-year students at TMU for their capstone project, ensuring alignment with industry standards and innovation.<br><br>
      Pitch Innovation: Successfully pitched and presented innovative ideas to stakeholders, resulting in approvals for new technological initiatives.<br><br>
      TPAR: Contributed to Technical Performance Assessment Reviews, ensuring quality assurance and compliance in all deliverables.
    `,
      },
      {
      status: 'Mitacs Globallink Internship Mentor',
      date: 'Apr 2024 - Aug 2024',
      description: ` Provided comprehensive support to a diverse group of international undergraduate students participating in the Mitacs Globalink program.<br><br>
               Collaborated with Mitacs and university staff to address any issues or concerns raised by GRIs and ensure a positive internship experience.`,
      icon: 'pi pi-globe',
      more: 'photo here',
      color: '#4caf50',
      },
      {
      status: 'Fintech Cadence Trainee',
      date: 'Mar 2024 - May 2024',
      description:
        'Participated in a training program focused on financial technology, gaining insights into the latest trends and technologies in the fintech industry.',
      icon: 'pi pi-dollar',
      more: '<a href="https://www.linkedin.com/in/qanh-vo/overlay/1715816290079/single-media-viewer/?profileId=ACoAADH59J0BXd9XAr0sehlF-SD7IztDgn_GQoA" target="_blank">Certificate</a>',
      color: '#FF9800',
      },
      {
      status: 'Undergraduate Research Assistant',
      date: 'Oct 2023 - Aug 2024',
      description:
        " Conduct literature reviews on API alternatives, and social media analysis methodologies.<br><br> Applying advanced data analysis techniques using Python, Pandas and NumPy, to extract meaningful insights and trends related to API alternatives and Social Media Listening.<br><br>  Explored and experimented with machine learning models, incorporating OpenAI's GPT (Generative Pre-trained Transformer) for text generation and analysis.",
      icon: 'pi pi-graduation-cap',
      color: '#673AB7',
      more: '<a href="Research paper link" target="_blank">Research Paper</a>',
      },
      {
      status: 'Machine Learning Fellow',
      date: 'May 2023 - Jun 2023',
      description:
        'Understood the fundamentals of machine learning to approach problems in new ways, offer answers to important questions, and collaborate to create AI tools that benefit society.<br><br> Explored the field of artificial intelligence with the assistance of speakers and lecturers, and narrowed my interests with guidance from knowledgeable mentors and teaching assistants.',
      icon: 'pi pi-microchip-ai',
      color: '#9C27B0',
      more: '<a href="https://www.ai4goodlab.com/news/project-reports/2024/02/15/plate-pal-2023-edmonton-accelerator-award-winner/" target="_blank">Article</a>',
      },
    ];
  }

  visible: boolean = false;
  selectedEvent: any = null;

  showModal(event: any): void {
    this.selectedEvent = event;
    this.visible = true;
  }

  closeModal(): void {
    this.visible = false;
    this.selectedEvent = null;
  }
}
