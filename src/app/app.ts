import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from './navbar/navbar';
import { LandingPage } from './landing-page/landing-page';
import { Footer } from './footer/footer';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-root',
  imports: [CommonModule, Navbar, LandingPage, Footer, ToastModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit{

  constructor(private renderer: Renderer2) {}

  con: boolean = true;

  ngOnInit(): void {
    this.loadRecaptcha();
  }

  loadRecaptcha() {
    const script = this.renderer.createElement('script');
    script.src = 'https://www.google.com/recaptcha/enterprise.js';
    script.async = true;
    script.defer = true;
    this.renderer.appendChild(document.head, script);
  }
}
