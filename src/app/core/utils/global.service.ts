import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FixedService } from './fixed.service';
import { Title } from '@angular/platform-browser';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { StorageMap } from '@ngx-pwa/local-storage';
import { BehaviorSubject } from 'rxjs';
import { CookieEnum } from '../enum/cookie.enum';

@Injectable({ providedIn: 'root' })
export class GlobalService {
  toastrOptions: any;
  appLangChanged: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  mainDataLoaded: BehaviorSubject<boolean> = new BehaviorSubject<any>(false);

  constructor(
    private translate: TranslateService,
    private storageMap: StorageMap,
    public localeService: BsLocaleService,
    public fixed: FixedService,
    private titleSer: Title
  ) {
    this.storageMap.get(CookieEnum.appLang).subscribe(data => {
      this.fixed.activeLang = data == null ? this.fixed.appLanguages[1] : data;
      this.themeSettings(this.fixed.activeLang);
      this.setLang(this.fixed.activeLang.code);
    });
  }

  setLang(lang: any) {
    this.translate.addLangs(['en', 'ar']);
    this.translate.setDefaultLang('en');
    this.translate.use(lang);
  }

  themeSettings(appLang: any) {
    this.fixed.activeLang = appLang;
    const html = document.getElementsByTagName('html')[0] as HTMLHtmlElement;
    html.setAttribute('lang', this.fixed.activeLang.code);
    html.setAttribute('dir', this.fixed.activeLang.dir);
    html.setAttribute('direction', this.fixed.activeLang.dir);
    html.setAttribute('style', 'direction: ' + this.fixed.activeLang.dir);

    const body = document.getElementsByTagName('body')[0] as HTMLBodyElement;
    body.setAttribute('dir', appLang.dir);
    body.dir = appLang.dir;
    if (appLang.dir == 'rtl') {
      body.classList.add('rtl');
    } else {
      body.classList.remove('rtl');
    }
    this.titleSer.setTitle(appLang.title);
    this.storageMap.set(CookieEnum.appLang, this.fixed.activeLang).subscribe(() => {});
    this.setLang(this.fixed.activeLang.code);
    this.localeService.use(this.fixed.activeLang.code);
    this.appLangChanged.next(this.fixed.activeLang);
  }
}
