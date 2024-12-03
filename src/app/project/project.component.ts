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
  // products: any[] | undefined;

  // responsiveOptions: any[] | undefined;

  // // constructor(private productService: ProductService) {}

  // ngOnInit() {
  //     this.products = [
  //       {
  //         id: '1000',
  //         code: 'f230fh0g3',
  //         name: 'Bamboo Watch',
  //         description: 'Product Description',
  //         image: '/platepal.png',
  //         price: 65,
  //         category: 'Accessories',
  //         quantity: 24,
  //         inventoryStatus: 'INSTOCK',
  //         rating: 5
  //       },
  //       {
  //         id: '1000',
  //         code: 'f230fh0g3',
  //         name: 'Bamboo Watch',
  //         description: 'Product Description',
  //         image: 'bamboo-watch.jpg',
  //         price: 65,
  //         category: 'Accessories',
  //         quantity: 24,
  //         inventoryStatus: 'INSTOCK',
  //         rating: 5
  //       },
  //       {
  //         id: '1000',
  //         code: 'f230fh0g3',
  //         name: 'Bamboo Watch',
  //         description: 'Product Description',
  //         image: 'bamboo-watch.jpg',
  //         price: 65,
  //         category: 'Accessories',
  //         quantity: 24,
  //         inventoryStatus: 'INSTOCK',
  //         rating: 5
  //       },
  //     ]
  //     this.responsiveOptions = [
  //         {
  //             breakpoint: '1400px',
  //             numVisible: 3,
  //             numScroll: 3
  //         },
  //         {
  //             breakpoint: '1220px',
  //             numVisible: 2,
  //             numScroll: 2
  //         },
  //         {
  //             breakpoint: '1100px',
  //             numVisible: 1,
  //             numScroll: 1
  //         }
  //     ];
  // }

  // getSeverity(status: string) {
  //     switch (status) {
  //       default: return 'success';
  //         case 'INSTOCK':
  //             return 'success';
  //         case 'LOWSTOCK':
  //             return 'warning';
  //         case 'OUTOFSTOCK':
  //             return 'danger';
  //     }
  // }
}