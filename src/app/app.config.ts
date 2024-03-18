import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideToastr } from 'ngx-toastr';
import { authInterceptor } from './service/interceptor/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideToastr(), provideHttpClient(withInterceptorsFromDi()),  
    {
        provide:HTTP_INTERCEPTORS,
        useClass:authInterceptor,
        multi:true
    }],
};
