import { Component, OnInit, EventEmitter, Output, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { EventService } from '../../core/services/event.service';

//Logout
import { environment } from '../../../environments/environment';
import { AuthfakeauthenticationService } from '../../core/services/authfake.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

// Language
import { CookieService } from 'ngx-cookie-service';
import { LanguageService } from '../../core/services/language.service';
import { TranslateService } from '@ngx-translate/core';
import { Account } from 'src/app/authentication/model/account.model';
import { UserService } from 'src/app/shared/user.service';
import { ItemHttpService } from 'src/app/pages/items/item-http.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  element: any;
  mode: string | undefined;
  notifications: any[] = [];
  approved: any[] = [];
  rejected: any[] = [];
  @Output() mobileMenuButtonClicked = new EventEmitter();

  flagvalue: any;
  valueset: any;
  countryName: any;
  cookieValue: any;
  currentUser!: Account;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private eventService: EventService,
    public languageService: LanguageService,
    public _cookiesService: CookieService,
    public translate: TranslateService,
    private authService: AuthenticationService,
    private authenticationService: AuthenticationService,
    private authFackservice: AuthfakeauthenticationService,
    private userService: UserService,
    private router: Router,
    private itemService: ItemHttpService,
    private notifier: NotifierService
  ) {}

  ngOnInit(): void {
    this.element = document.documentElement;
    this.getCurrentUserData();

    /* setInterval(() => {
      this.getNotifications();
    }, 10000); */

    /* setInterval() */

    // Cookies wise Language set
    this.cookieValue = this._cookiesService.get('lang');
    const val = this.listLang.filter((x) => x.lang === this.cookieValue);
    this.countryName = val.map((element) => element.text);
    if (val.length === 0) {
      if (this.flagvalue === undefined) {
        this.valueset = 'assets/images/flags/us.svg';
      }
    } else {
      this.flagvalue = val.map((element) => element.flag);
    }
  }

  getCurrentUserData() {
    this.currentUser = this.userService.getCurrentUser()
      ? this.userService.getCurrentUser()
      : this.userService.getCurrentUserAfterReload();

    this.getNotifications();
  }

  viewAllNotifications() {
    this.router.navigate(['/examalpha/notifications']);
  }

  /**
   * Toggle the menu bar when having mobile screen
   */
  toggleMobileMenu(event: any) {
    event.preventDefault();
    this.mobileMenuButtonClicked.emit();
  }

  getNotifications() {
    /* if (
      this.currentUser.authority === 'AUTHOR' ||
      this.currentUser.authorities.includes('MODERATOR')
    ) { */
    this.itemService
      .fetchAuthorModerationNotifications(this.currentUser.id)
      .subscribe(
        (value) => {
          if (value) {
            value.content.forEach((notification) => {
              if (
                notification.messageRead == false &&
                notification.status == 'ACCEPTED'
              ) {
                this.notifications.push(notification);
                this.approved.push(notification);
              }
              if (
                notification.messageRead == false &&
                notification.status == 'REJECTED'
              ) {
                this.notifications.push(notification);
                this.rejected.push(notification);
              }
            });
            /* this.notifications.content.forEach((notification) => {
                if(notification.status == 'REJECTED'){
                  this.rejected.push(notification);
                }else{
                  this.approved.push(notification);
                }
              }) */
            // console.log('NOTIFICATIONS: ', this.notifications);
          }
        },
        (error: HttpErrorResponse) => {
          this.notifier.notify('error', `${error.error.message}`);
        }
      );
    /* } */
  }

  /**
   * Fullscreen method
   */
  fullscreen() {
    document.body.classList.toggle('fullscreen-enable');
    if (
      !document.fullscreenElement &&
      !this.element.mozFullScreenElement &&
      !this.element.webkitFullscreenElement
    ) {
      if (this.element.requestFullscreen) {
        this.element.requestFullscreen();
      } else if (this.element.mozRequestFullScreen) {
        /* Firefox */
        this.element.mozRequestFullScreen();
      } else if (this.element.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        this.element.webkitRequestFullscreen();
      } else if (this.element.msRequestFullscreen) {
        /* IE/Edge */
        this.element.msRequestFullscreen();
      }
    } else {
      if (this.document.exitFullscreen) {
        this.document.exitFullscreen();
      } else if (this.document.mozCancelFullScreen) {
        /* Firefox */
        this.document.mozCancelFullScreen();
      } else if (this.document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        this.document.webkitExitFullscreen();
      } else if (this.document.msExitFullscreen) {
        /* IE/Edge */
        this.document.msExitFullscreen();
      }
    }
  }

  /**
   * Topbar Light-Dark Mode Change
   */
  changeMode(mode: string) {
    this.mode = mode;
    this.eventService.broadcast('changeMode', mode);

    switch (mode) {
      case 'light':
        document.body.setAttribute('data-layout-mode', 'light');
        document.body.setAttribute('data-sidebar', 'light');
        break;
      case 'dark':
        document.body.setAttribute('data-layout-mode', 'dark');
        document.body.setAttribute('data-sidebar', 'dark');
        break;
      default:
        document.body.setAttribute('data-layout-mode', 'light');
        break;
    }
  }

  /***
   * Language Listing
   */
  listLang = [
    { text: 'English', flag: 'assets/images/flags/us.svg', lang: 'en' },
    { text: 'Española', flag: 'assets/images/flags/spain.svg', lang: 'es' },
    { text: 'Deutsche', flag: 'assets/images/flags/germany.svg', lang: 'de' },
    { text: 'Italiana', flag: 'assets/images/flags/italy.svg', lang: 'it' },
    { text: 'русский', flag: 'assets/images/flags/russia.svg', lang: 'ru' },
    { text: '中国人', flag: 'assets/images/flags/china.svg', lang: 'ch' },
    { text: 'français', flag: 'assets/images/flags/french.svg', lang: 'fr' },
  ];

  /***
   * Language Value Set
   */
  setLanguage(text: string, lang: string, flag: string) {
    this.countryName = text;
    this.flagvalue = flag;
    this.cookieValue = lang;
    this.languageService.setLanguage(lang);
  }

  /**
   * Logout the user
   */
  logout() {
    /* if (environment.defaultauth === 'firebase') {
      this.authService.logout();
    } else {
      this.authFackservice.logout();
    } */
    this.authService.logoutUser().subscribe((value) => {
      // console.log(value);
    });
    this.router.navigate(['/sign-in']);
  }

  routeToProfile() {
    if (this.currentUser.authorities.includes('ADMIN')) {
      this.router.navigate(['/itembank/users/view/' + this.currentUser.id]);
    }
  }
}
