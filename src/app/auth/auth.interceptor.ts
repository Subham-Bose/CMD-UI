import { HttpInterceptor, HttpRequest, HttpHandler, HttpUserEvent, HttpEvent } from "@angular/common/http";
import 'rxjs';
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router : Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.headers.get('No-Auth') == "True")
        return next.handle(req.clone());

    if (localStorage.getItem('userToken') != null) {
        const clonedreq = req.clone({
            headers: req.headers.set("Authorization", "Bearer " + localStorage.getItem('userToken'))
        });
      return next.handle(clonedreq)
    }
    else {
      this.router.navigateByUrl('/login');
      return next.handle(req.clone());
    }
}
}
