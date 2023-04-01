import { Component } from '@angular/core';
import { LandingPageService } from './services/landing-page.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent {
  books!: any[];
  authors!: any[];
  isLoading = true;
  constructor(private landingPageService: LandingPageService) {}

  quotes = [
    {
      text: 'The first draft is just you telling yourself the story.',
      author: 'Terry Pratchett',
    },
    {
      text: 'The scariest moment is always just before you start.',
      author: 'Stephen King',
    },
    {
      text: 'The only way to do great work is to love what you do.',
      author: ' Steve Jobs',
    },
    {
      text: "If there's a book that you want to read, but it hasn't been written yet, then you must write it.",
      author: 'Toni Morrison',
    },
    {
      text: "You can always edit a bad page. You can't edit a blank page.",
      author: 'Jodi Picoult',
    },
    {
      text: "Don't tell me the moon is shining; show me the glint of light on broken glass.",
      author: 'Anton Chekhov',
    },
    {
      text: "A professional writer is an amateur who didn't quit.",
      author: 'Richard Bach',
    },
    {
      text: 'Start writing, no matter what. The water does not flow until the faucet is turned on.',
      author: "Louis L'Amour",
    },
    {
      text: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
      author: 'Nelson Mandela',
    },
    {
      text: 'If you want to go fast, go alone. If you want to go far, go together.',
      author: 'African Proverb',
    },
    {
      text: "Believe you can and you're halfway there.",
      author: 'Theodore Roosevelt',
    },
    {
      text: 'Success is not final, failure is not fatal: It is the courage to continue that counts.',
      author: 'Winston Churchill',
    },
    {
      text: 'The world breaks everyone, and afterward, some are strong at the broken places',
      author: 'Ernest Hemingway',
    },
    {
      text: 'Education is the most powerful weapon which you can use to change the world.',
      author: 'Nelson Mandela',
    },
    {
      text: 'It does not matter how slowly you go as long as you do not stop.',
      author: 'Confucius',
    },
    {
      text: 'A person who never made a mistake never tried anything new.',
      author: 'Albert Einstein',
    },
    {
      text: 'The best way to predict your future is to create it.',
      author: 'Abraham Lincoln',
    },
    {
      text: 'Happiness is not something ready made. It comes from your own actions.',
      author: 'Dalai Lama XIV',
    },
  ];

  randomQuote = { text: '', author: '' };

  ngOnInit() {
    this.landingPageService.getPopularBooks().subscribe((data) => {
      this.books = data.slice(0, 3);
    });

    this.landingPageService.getPopularAuthors().subscribe((data) => {
      this.authors = data.slice(0, 3);
      this.isLoading = false;
    });
    setInterval(() => {
      this.randomQuote = this.getRandomQuote();
    }, 2000);
  }

  getRandomQuote() {
    const index = Math.floor(Math.random() * this.quotes.length);
    return this.quotes[index];
  }
}
