import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { contentData, TechContent } from '../tech-content.model';
@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent {
  activeSection: keyof TechContent = 'technology';
  techContent = 'technology';
  achievements= [
    'Won Hackathon 2023',
    'Developed Open Source Tools',
    'Published Research Papers',
  ];
  certifications= [
    'Microsoft Certified: Azure Fundamentals',
    'Google Cloud Professional Data Engineer',
    'Certified Scrum Master',
  ];



  // get content(): string[] {
  //   const items = this.techContent[this.activeSection];
  //   this.splitContent(items);
  //   return items;
  // }

  setActiveSection(section: keyof TechContent): void {
    this.activeSection = section;
  }
  
  // private splitContent(items: string[]): void {
  //   if (items.length > 8) {
  //     const midIndex = Math.ceil(items.length / 2);
  //     this.firstColumn = items.slice(0, midIndex);
  //     this.secondColumn = items.slice(midIndex);
  //   } else {
  //     this.firstColumn = items;
  //     this.secondColumn = []; // Leave the second column empty if there are 8 or fewer items
  //   }
  // }

}
