import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';

interface Product {
    id: string;
    name: string;
    description: string;
    image: string;
    link: string;
}

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [RadioButtonModule, CommonModule, CarouselModule, ButtonModule, TagModule, DialogModule],
  providers: [],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent {

    products: Product[] = [];

    responsiveOptions: any[] | undefined;

    visible: boolean = false;
    selectedProduct: Product | null = null;
    displayDialog: boolean = false;

    constructor() {}
    
    openLink(link: string) {
        window.open(link, '_blank');
    }

    // showDialog1(product: Product) {
    //     this.selectedProduct = product;
    //     this.visible = true;
    //     console.log("selectedProduct", this.selectedProduct);
    // }

    showDialog() {
        this.visible = true;
    }
    closeDialog(): void {
        this.displayDialog = false;
        this.selectedProduct = null;
      }
}