import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [RadioButtonModule, CommonModule, CarouselModule, ButtonModule, TagModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent {

}