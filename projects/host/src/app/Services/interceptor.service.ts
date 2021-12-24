/* import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProduitservService } from './produitserv.service';



@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private produitservice: ProduitservService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if account is logged in and request is to the api url
        const jwt = this.produitservice.jwt;
        const isLoggedIn = jwt!==undefined&&jwt!=null;

        console.log("***************Iterceptor"+jwt)
        
        if (isLoggedIn) {
            request = request.clone({
                setHeaders: { Authorization: `Bearer ${jwt}` }
            });
        }

        return next.handle(request);
    }
} */