import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DockModule } from 'primeng/dock';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [DockModule, RadioButtonModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{
    items: MenuItem[] | undefined;
  
    label: string | undefined;
  
    ngOnInit() {
      this.items = [
        {
          label: 'Data Science',
          icon: '/p1.png',
        },
        {
          label: 'FrontEnd',
          icon: '/p2.png',
        },
        {
          label: 'Backend',
          icon: '/p3.png',
        },
        {
          label: 'blah blah',
          icon: '/cat.png',
        },
      ];
    }
  }
