import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage = 0;

  images = [
    {
      title: 'Random photo 1',
      url: 'https://source.unsplash.com/random/200x200',
    },
    {
      title: 'Random photo 2',
      url: 'https://source.unsplash.com/random/350x350',
    },
    {
      title: 'Random photo 3',
      url: 'https://source.unsplash.com/random/400x400',
    },
    {
      title: 'Random photo 4',
      url: 'https://source.unsplash.com/random/500x500',
    },
    {
      title: 'Random photo 5',
      url: 'https://source.unsplash.com/random/600x600',
    },
    {
      title: 'Random photo 1',
      url: 'https://source.unsplash.com/random/200x200',
    },
    {
      title: 'Random photo 2',
      url: 'https://source.unsplash.com/random/350x350',
    },
    {
      title: 'Random photo 3',
      url: 'https://source.unsplash.com/random/400x400',
    },
    {
      title: 'Random photo 4',
      url: 'https://source.unsplash.com/random/500x500',
    },
    {
      title: 'Random photo 5',
      url: 'https://source.unsplash.com/random/600x600',
    },
    {
      title: 'Random photo 1',
      url: 'https://source.unsplash.com/random/200x200',
    },
    {
      title: 'Random photo 2',
      url: 'https://source.unsplash.com/random/350x350',
    },
    {
      title: 'Random photo 3',
      url: 'https://source.unsplash.com/random/400x400',
    },
    {
      title: 'Random photo 4',
      url: 'https://source.unsplash.com/random/500x500',
    },
    {
      title: 'Random photo 5',
      url: 'https://source.unsplash.com/random/600x600',
    },
  ];

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
