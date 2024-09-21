import { Component } from '@angular/core';
import { FixedService } from '../../utils/fixed.service';
import { GlobalService } from '../../utils/global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  isDarkMode = false;
  constructor(
    public fixed: FixedService,
    private global: GlobalService
  ) {}

  ngOnInit() {
    this.isDarkMode = localStorage.getItem('darkMode') === 'true';
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }
  toggleLanguage() {
    // Toggle between English and Arabic based on the current language
    const nextLanguageCode = this.fixed.activeLang.code === 'en' ? 'ar' : 'en';
    const nextLanguage = this.fixed.appLanguages.find((lang: { code: string }) => lang.code === nextLanguageCode);

    if (nextLanguage) {
      this.global.themeSettings(nextLanguage); // Call themeSettings with the next language
    }
  }
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('darkMode', this.isDarkMode.toString());
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }
}
