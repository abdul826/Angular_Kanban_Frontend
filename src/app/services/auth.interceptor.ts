import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { TmplAstRecursiveVisitor } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";

// const TOKEN_HEADER = '';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private login:LoginService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // throw new Error("Method not implemented.");

        // Add the jwt token whic is store in local storage

        let authReq = req;
        const token = this.login.getToken();
        console.log("inside interceptor");
        
        if(token != null){
            authReq = authReq.clone({
                setHeaders:{
                    Authorization:`Bearer ${token}`
                },
        });
        }
        return next.handle(authReq);
    }

}

export const authInterceptorProviders=[
    {
        provide:HTTP_INTERCEPTORS,
        useClass:AuthInterceptor,
        multi:true,
    }
];