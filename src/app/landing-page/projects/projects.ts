import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {

  projectRedirect(arg: number, event: Event){
    event.stopPropagation();

    switch(arg){
      //Discord Music Bot
      case 1:
        window.open('https://google.com','_blank');
      break;
      //Lyrics Finder
      case 2:
        window.open('https://www.npmjs.com/package/@chen4520/lyrics-finder','_blank')
      break;
      default:
        console.log('not exists');
        break;
    }
  }

}
