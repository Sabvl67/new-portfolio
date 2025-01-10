import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';


import { WORK_DETAILS } from '../work-detail';
import { from } from 'rxjs';

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
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {

    products: Product[] = [];

    responsiveOptions: any[] | undefined;

    visible: boolean = false;
    selectedProduct!: Product;
    // displayDialog: boolean = false;

    constructor() {}

    ngOnInit() {

        this.products = WORK_DETAILS;

            this.responsiveOptions = [
                    {
                            breakpoint: '1199px',
                            numVisible: 1,
                            numScroll: 1
                    },
                    {
                            breakpoint: '991px',
                            numVisible: 2,
                            numScroll: 1
                    },
                    {
                            breakpoint: '767px',
                            numVisible: 1,
                            numScroll: 1
                    }
            ];
    }
    
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

}