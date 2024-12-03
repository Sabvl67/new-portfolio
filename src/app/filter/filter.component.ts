import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})

export class FilterComponent implements OnInit {
  categories: string[] = ['All', 'Data Science', 'Fullstack'];
  selectedCategory: string = 'All';

  cards = [
    {
      title: 'Data Science 101',
      category: 'Data Science',
      image: 'https://images.unsplash.com/photo-1477666250292-1419fac4c25c',
      description: 'Learn the basics of Data Science.',
    },
    {
      title: 'Fullstack Development',
      category: 'Fullstack',
      image: 'https://images.unsplash.com/photo-1425342605259-25d80e320565',
      description: 'Master fullstack web development.',
    },
    {
      title: 'Data Science Advanced',
      category: 'Data Science',
      image: 'https://images.unsplash.com/photo-1503249023995-51b0f3778ccf',
      description: 'Take your Data Science skills to the next level.',
    },
  ];

  filteredCards = [...this.cards];

  constructor() {}

  ngOnInit(): void {
    this.filterCards(); // Initialize with all cards
  }

  filterCards(): void {
    if (this.selectedCategory === 'All') {
      this.filteredCards = [...this.cards];
    } else {
      this.filteredCards = this.cards.filter(
        (card) => card.category === this.selectedCategory
      );
    }
  }
}
