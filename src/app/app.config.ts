import { ApplicationConfig} from '@angular/core';
import { MessageService } from 'primeng/api';
import { provideHttpClient } from '@angular/common/http';

import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

export const appConfig: ApplicationConfig = {
  providers: [
    providePrimeNG({
      theme: {
        preset: Aura,
      }
    }),
    MessageService,
    provideHttpClient(),

  ],
};
