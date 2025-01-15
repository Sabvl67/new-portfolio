import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { contentData, TechContent } from '../tech-content.model';
@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent {
  activeSection: keyof TechContent = 'technology';
  techContent: TechContent = contentData;

  firstColumn: string[] = [];
  secondColumn: string[] = []; 

  get content(): string[] {
    const items = this.techContent[this.activeSection];
    this.splitContent(items);
    return items;
  }

  setActiveSection(section: keyof TechContent): void {
    this.activeSection = section;
    this.splitContent(this.techContent[section]);
  }
  
  private splitContent(items: string[]): void {
    if (items.length > 8) {
      const midIndex = Math.ceil(items.length / 2);
      this.firstColumn = items.slice(0, midIndex);
      this.secondColumn = items.slice(midIndex);
    } else {
      this.firstColumn = items;
      this.secondColumn = []; // Leave the second column empty if there are 8 or fewer items
    }
  }

}
