import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Notification } from '../../shared-component/services/notification';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact implements OnInit {
  captchaToken: string | null = null;;

  constructor(
    private http: HttpClient,
    private toast: Notification
  ){}

  contactform = new FormGroup({
    senderName : new FormControl('', [Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    message: new FormControl('')
  });

  ngOnInit() {
   this.loadCaptchaTokenListener();
  }

  onFormSubmit(){

    if(!this.captchaToken){
      (window as any).grecaptcha.enterprise.reset();
      this.captchaToken = null;
      this.toast.error('Please Complete the Captcha first before submitting.')
    }

    if (this.contactform.valid && this.captchaToken) {
      const formData = {
        ...this.contactform.value,
        'g-recaptcha-response': this.captchaToken
      };
      
      this.http.post("https://formspree.io/f/xojkqzpk", formData).subscribe({
        next: (res) => {
          this.toast.success('Message sent.');
          this.contactform.reset();
          this.captchaToken = null;
        },
        error: (err) => {
          (window as any).grecaptcha.enterprise.reset();
          this.captchaToken = null;
          this.toast.error('Something went wrong, try again later.')
        }
      });
    }else{
      this.captchaToken = null;
      this.contactform.markAllAsTouched();
    }
  };

  loadCaptchaTokenListener() {
    (window as any).onCaptchaSuccess = (token: string) => {
      this.captchaToken = token;
    };
  }

}
    