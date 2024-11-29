import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, InputTextModule, FloatLabelModule, ButtonModule, ImageModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  value: string|undefined;
}
