import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class Notification {

  constructor(private messageService: MessageService) {}

  // Custom Success Method
  success(msg: string) {
    this.messageService.add({ 
        severity: 'success', 
        summary: 'Success', 
        detail: msg, 
        life: 3000 
    });
  }

  // Custom Error Method
  error(msg: string) {
    this.messageService.add({ 
        severity: 'error', 
        summary: 'Error', 
        detail: msg, 
        sticky: true // Stays until user clicks X
    });
  }

}
