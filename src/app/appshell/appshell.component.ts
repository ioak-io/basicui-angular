// import { Component, Input, Output, EventEmitter } from '@angular/core';

// @Component({
//   selector: 'app-appshell',
//   templateUrl: './appshell.component.html',
//   styleUrls: ['./appshell.component.scss'],
  
// })
// export class AppshellComponent {
//   @Input() isSidebarExpanded: boolean = true;
//   @Input() isDarkMode: boolean=true;
//   @Input() logoIconWhite: string = '';
//   @Input() logoIconBlack: string ='';
//   @Input() logoTextWhite: string='';
//   @Input() logoTextBlack: string = '';

//   @Input() navbar: string='';
//   @Input() body: string = '';
//   @Input() mobileNavbar: string = '';

//   @Output() sidebarToggle = new EventEmitter<void>();
//   @Output() darkModeToggle = new EventEmitter<void>();
//   @Output() signin = new EventEmitter<void>();
//   @Output() signout = new EventEmitter<void>();

//   toggleSidebar(){
//     this.sidebarToggle.emit();
//   }

//   toggleDarkMode(){
//     this.darkModeToggle.emit();
//   }

//   onSignin(){
//     this.signin.emit();
//   }

//   onSignout(){
//     this.signout.emit();
//   }

// }

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-appshell',
  templateUrl: './appshell.component.html',
  styleUrls: ['./appshell.component.scss'],
})
export class AppshellComponent {
  @Input() isSidebarExpanded: boolean = true;
  @Input() isDarkMode: boolean = false;
  @Input() logoIconWhite: string = '';
  @Input() logoIconBlack: string = '';
  @Input() logoTextWhite: string = '';
  @Input() logoTextBlack: string = '';

  @Input() navbar: string = '';
  @Input() body: string = '';
  @Input() mobileNavbar: string = '';

  @Output() sidebarToggle = new EventEmitter<void>();
  @Output() darkModeToggle = new EventEmitter<void>();
  @Output() signin = new EventEmitter<void>();
  @Output() signout = new EventEmitter<void>();

  toggleSidebar() {
    this.isSidebarExpanded = !this.isSidebarExpanded;
    this.sidebarToggle.emit();
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.darkModeToggle.emit();
  }

  onSignin() {
    this.signin.emit();
  }

  onSignout() {
    this.signout.emit();
  }
}

