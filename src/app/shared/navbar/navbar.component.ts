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
    { code: 'az', label: 'Azərbaycan', flag: 'assets/images/flags/az.png' },
    { code: 'ru', label: 'Русский', flag: 'assets/images/flags/ru.png' },
    { code: 'en', label: 'English', flag: 'assets/images/flags/en.png' }
  ];
  currentLanguage: string = 'en';
  showLanguages: boolean = false;

  currentLanguageFlag: string | undefined;
  currentLanguageLabel: string | undefined;
  showServicesDropdown: boolean | undefined;
  showAboutDropdown: boolean | undefined;
  showMenu: boolean | undefined;

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

  showServices() {
    this.showServicesDropdown = !this.showServicesDropdown;
    this.showMenu = false;
    this.showAboutDropdown = false;
    this.showLanguages = false;
  }

  showAbout() {
    this.showAboutDropdown = !this.showAboutDropdown;
    this.showMenu = false;
    this.showServicesDropdown = false;
    this.showLanguages = false;
  }

  showMobileMenu() {
    this.showMenu = !this.showMenu;
    this.showServicesDropdown = false;
    this.showAboutDropdown = false;
    this.showLanguages = false;
  }

  showLanguage() {
    this.showLanguages = !this.showLanguages;
    this.showMenu = false;
    this.showServicesDropdown = false;
    this.showAboutDropdown = false;
  }
}
