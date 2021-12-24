/* import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProduitservService } from './produitserv.service';



@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    urlsToNotUse: Array<string>;
    constructor(private produitservice: ProduitservService) {

        this.urlsToNotUse= [
            '/categories/'
          ];
     }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if account is logged in and request is to the api url
        const jwt = localStorage.getItem('token');
        const isLoggedIn = (jwt!==undefined||jwt!==null)

        console.log("***************Iterceptor"+jwt+"********************")
        
        if (isLoggedIn) {
            request = request.clone({
                setHeaders: { Authorization: `Bearer ${jwt}` }
            });
        }

        return next.handle(request);
    }
    private isValidRequestForInterceptor(requestUrl: string): boolean {
        let positionIndicator: string = 'api/';
        let position = requestUrl.indexOf(positionIndicator);
        if (position > 0) {
          let destination: string = requestUrl.substr(position + positionIndicator.length);
          for (let address of this.urlsToNotUse) {
            if (new RegExp(address).test(destination)) {
              return false;
            }
          }
        }
        return true;
      }
} */