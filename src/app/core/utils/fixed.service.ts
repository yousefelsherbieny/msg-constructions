import { Injectable } from '@angular/core';

@Injectable()
export class FixedService {
  public activeLang: any = {};
  public appLanguages: any = [];

  constructor() {
    this.initialAppLang();
  }

  initialAppLang() {
    this.appLanguages = [
      {
        languageId: 1,
        isRTL: true,
        code: 'ar',
        name: 'عربي',
        dir: 'rtl',
        icon: 'flag-icon-sa',
        title: 'دكتور هيلثي بلس',
        dateFormat: 'ar-SA',
      },
      {
        languageId: 2,
        isRTL: false,
        code: 'en',
        name: 'English',
        dir: 'ltr',
        icon: 'flag-icon-uk',
        title: 'Healthy Plus Doctor',
        dateFormat: 'en-US',
      },
    ];

    // Set default language (English)
    this.activeLang = this.appLanguages.find((lang: { code: string; }) => lang.code === 'en');
  }
}
