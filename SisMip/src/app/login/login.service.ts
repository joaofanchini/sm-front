import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { stringify } from 'querystring';


const Token = 'auth';
@Injectable({
    providedIn: 'root'
})
export class LoginService implements OnInit {
    TOKEN_KEY: string = "TOKEN";
    usuarioLogado: boolean = false;
    mostrarMenuEmitter = new EventEmitter<boolean>();
    httpOptions: {
        responseType?: 'json',
        withCredentials?: false,
    }
    constructor(private router: Router, private http: HttpClient) { }
    logar(usuario: UsuarioModel) {
        usuario.resultadoLogin = '';
        let email = usuario.email;
        let password = usuario.senha;
        return this.http.post<any>(`${environment.apiUrl}/users/auth`,
            {
                email,
                password
            },
            this.httpOptions)
            .pipe(
                map(user => {
                    if (user.token) {
                        this.usuarioLogado = true;
                        this.mostrarMenuEmitter.emit(this.usuarioLogado);
                        if (usuario.manterConectado)
                            this.setTokenCookie(user.token);
                        else
                            this.setTokenSessionStorage(user.token);
                        this.router.navigateByUrl('/dashboard');
                    }
                    return user;
                }),
                catchError(err => {
                    usuario.resultadoLogin = 'Erro ao realizar o login do usuario. Tente novamente';
                    return throwError(err);
                })
            );
    }
    logout() {
        sessionStorage.clear();
        this.setCookie(Token, "");
        this.usuarioLogado = false;
        this.mostrarMenuEmitter.emit(this.usuarioLogado);
        document.location.reload();
    }
    getToken() {
        let tk = sessionStorage.getItem(Token);
        if (tk)
            return tk;
        return this.getCookie(Token);
    }
    setTokenSessionStorage(token: string): void {
        sessionStorage.setItem(Token, token);
    }
    setTokenCookie(token: string): void {
        this.setCookie(Token, token);
    }

    isLogged() {
        this.usuarioLogado = sessionStorage.getItem(Token) != null || this.getCookie(Token) != "";
        return this.usuarioLogado;
    }

    setCookie(name, value) {
        document.cookie = name + "=" + value + "; ";
    }

    getCookie(name) {
        let c;
        let cookies = document.cookie.split(';');
        console.log(cookies);
        for (var i = 0; i < cookies.length; i++) {
            c = cookies[i].split('=');
            if (c[0].trim() == name) {
                return c[1];
            }
        }
        return "";
    }
    ngOnInit() {
        this.mostrarMenuEmitter.emit(this.isLogged());
    }
}