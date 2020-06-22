import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map, shareReplay, filter } from 'rxjs/operators';
import { LoginService } from '../login/login.service';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, NavigationEnd, ActivationStart } from '@angular/router';


@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
  isExpanded: boolean = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  mostrarMenu: boolean = this.loginService.isLogged();
  title: string = '';
  icon: string = '';

  constructor(private breakpointObserver: BreakpointObserver,
    private loginService: LoginService,
    private titleService: Title,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    router.events.pipe(
      filter(event => event instanceof ActivationStart))
      .subscribe(event => {
        this.title = event['snapshot'].data.title;
        this.icon = event['snapshot'].data.icon;
        this.titleService.setTitle('SisMip - ' + this.title);
      });

  }
  logout() {
    this.loginService.logout();
  }
  ngOnInit() {
    this.loginService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }
}
