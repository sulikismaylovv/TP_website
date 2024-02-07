// navbar.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  logo: string = 'assets/images/logo.png';
  languages = [
    { code: 'az', label: 'Azərbaycan', flag: 'path-to-azerbaijan-flag.png' },
    { code: 'ru', label: 'Русский', flag: 'path-to-russian-flag.png' },
    { code: 'en', label: 'English', flag: 'path-to-english-flag.png' }
  ];
  currentLanguage: string = 'en';
  showLanguages: boolean = false;

  currentLanguageFlag: string | undefined;
  currentLanguageLabel: string | undefined;

  constructor() {
    this.setCurrentLanguage(this.currentLanguage);
  }

  setCurrentLanguage(code: string) {
    const language = this.languages.find(lang => lang.code === code);
    if (language) {
      this.currentLanguage = code;
      this.currentLanguageFlag = language.flag;
      this.currentLanguageLabel = language.label;
    }
    this.showLanguages = false;
  }
}
