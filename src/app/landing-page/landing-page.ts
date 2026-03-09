import { Component } from '@angular/core';
import { AboutPage } from './about-page/about-page';
import { Skills } from './skills/skills';
import { Projects } from './projects/projects';
import { Contact } from './contact/contact';

@Component({
  selector: 'app-landing-page',
  imports: [AboutPage, Skills, Projects, Contact],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {}
