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
          label: 'Spotify',
          icon: 'spotify.svg'
        },
        {
          label: 'Github',
          icon: '/github.svg',
        },
        {
          label: 'Linkedin',
          icon: '/linkedin.svg',
        },
        {
          label: 'Gmail',
          icon: '/gmail.svg',
        },
        {
          label: 'Threads',
          icon: '/threads.svg',
        },
      ];
    }
  }
