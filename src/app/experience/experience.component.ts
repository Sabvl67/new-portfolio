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
  encapsulation: ViewEncapsulation.None,
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
        description: `Contributed to impactful projects at a leading nuclear company, leveraging expertise in mapping tools, digital workflows, and full-stack development to enhance operational efficiency and ensure compliance. Designed and implemented Work Plans (WPLs) and Inspection Test Plans (ITPs), led and mentored students on industry-aligned projects, and pitched innovative solutions that secured stakeholder approval. Contributed to Technical Performance Assessments (TPAR), upholding quality standards in a high-stakes environment.
`,
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
        status: 'Mitacs Globalink Internship Mentor',
        date: 'Apr 2024 - Aug 2024',
        description:
          'Mentored international students in the Mitacs Globalink Program, providing research guidance, cultural orientation, and professional development support. Leveraged leadership skills to address challenges, foster cross-cultural collaboration, and enhance students’ academic and professional experiences.',
        icon: 'pi pi-globe',
        more: `
          - Resolved and addressed academic and personal challenges for 6 international interns, ensuring a positive and productive experience in the Mitacs Globalink program. <br><br>
          - Facilitated and guided cultural adaptation by helping students navigate Canadian work culture, local customs, and effective communication practices.
        `,
        color: '#4caf50',
      },
      {
        status: 'Fintech Cadence Trainee',
        date: 'Mar 2024 - May 2024',
        description:
          'Selected as a scholarship recipient to participate in the prestigious FinTech Cadence program, where I gained advanced knowledge and hands-on experience in financial technology, including blockchain, digital payments, and financial modeling.',
        icon: 'pi pi-dollar',
        more: `<a href="https://www.linkedin.com/in/qanh-vo/overlay/1715816290079/single-media-viewer/?profileId=ACoAADH59J0BXd9XAr0sehlF-SD7IztDgn_GQoA" target="_blank">Certificate</a> <br><br>
            Completed FinTech Cadence Training Program, gaining in-depth knowledge of financial technology, innovation strategies, and startup ecosystems. <br><br>
            Enhanced skills in financial modeling, blockchain technology, and digital payment systems through mentorship from industry experts. <br><br>
            Engaged in networking with professionals and entrepreneurs in the FinTech space, building connections to foster growth and industry insights.`,
        color: '#FF9800',
      },
      {
        status: 'Undergraduate Research Assistant',
        date: 'Oct 2023 - Aug 2024',
        icon: 'pi pi-graduation-cap',
        description: `
            Conducted research on API alternatives, social media analysis, and machine learning models like OpenAI's GPT. 
            Contributed to organizing the Southern Alberta AI Conference 2024, highlighting AI's impact on business, ethics, and sustainability. 
            Collaborated on web app development to drive innovation for businesses.
            `,
        color: '#673AB7',
        more: `
          Conducted indepth research on API alternatives and social media analysis methodologies to support innovative solutions. <br><br>
          Applied advanced data analysis techniques using Python, Pandas, and NumPy to extract actionable insights and trends. <br><br>
          Explored and implemented machine learning models, including OpenAI's GPT, for text generation and social media analysis. <br><br>
          Contributed to organizing the Southern Alberta AI Conference 2025, focusing on AI's impact on business, ethics, and sustainability, and featuring keynote speakers, workshops, and panel discussions. <br><br>
          Collaborated on the development of a web application for businesses, showcasing practical applications of AI and innovation.
`,
      },
      {
        status: 'Machine Learning Fellow',
        date: 'May 2023 - Jun 2023',
        description:
          'Selected as a Machine Learning Fellow at AI4Good Lab, sponsored by Amii, CIFAR, and Mila, to develop AI solutions for social impact. Gained hands-on experience in machine learning, from data preprocessing to model deployment, while collaborating with interdisciplinary teams and receiving mentorship from leading experts.',
        icon: 'pi pi-microchip-ai',
        color: '#9C27B0',
        more: `
      - Chosen to participate in the prestigious AI4Good Lab program, sponsored by Amii, CIFAR, and Mila, aimed at leveraging AI for social good. <br><br>
      - Worked with interdisciplinary peers to brainstorm, prototype, and refine AI-driven solutions, fostering creativity and teamwork. <br><br>
      - Enhanced expertise in data preprocessing, model training, and evaluation, as well as using machine learning frameworks such as TensorFlow and PyTorch. <br><br>
      - Received guidance from industry leaders and academics to refine technical, analytical, and problem-solving skills in machine learning and AI. <br><br>
      - Won the <a href="https://www.ai4goodlab.com/news/project-reports/2024/02/15/plate-pal-2023-edmonton-accelerator-award-winner/" target="_blank">Edmonton Accelerator Team Award</a> for the project 'PlatePal,' an AI-driven solution addressing food insecurity among students in Canada, recognized for outstanding collaboration and innovation. <br><br>
      - Engaged with AI professionals, entrepreneurs, and researchers to build connections and gain insights into the AI industry and its applications for social impact. <br><br>
      `,
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
