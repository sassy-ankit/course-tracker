import { Injectable } from '@angular/core';

import { List } from '../shared/list.model';

@Injectable()
export class ListService {
  course: List = new List();

  constructor() {}
  // course = {
  //   title: 'Angular 5 (formerly Angular 2) - The Complete Guide',
  //   link: 'https://www.udemy.com/the-complete-guide-to-angular-2',
  //   sections: [
  //     {
  //       module: 1,
  //       title: 'Getting Started',
  //       content: [
  //         { title: 'Getting Started', duration: '0:57' },
  //         { title: 'What is Angular', duration: '1:59' },
  //         { title: 'Angular vs Angular 2 vs Angular 4', duration: '2:10' },
  //         { title: 'CLI Deep Dive and Troubleshooting', duration: '0:00' },
  //         { title: 'Project Setup and First App', duration: '5:13' },
  //         { title: 'Editing the First App', duration: '9:03' }
  //       ]
  //     }
  //   ]
  // };
}
