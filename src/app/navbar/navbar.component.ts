import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isScrolling:boolean=true;
  @HostListener('window:scroll')
   n(){
    this.isScrolling=window.scrollY<30

  }
  @ViewChild('navbarNav') navbarNav!: ElementRef;
    @ViewChild('toggler') toggler!: ElementRef;

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    if (
      this.navbarNav &&
      this.toggler &&
      this.navbarNav.nativeElement.classList.contains('show') &&
      !this.navbarNav.nativeElement.contains(event.target) &&
      !this.toggler.nativeElement.contains(event.target)
    ) {
      this.toggler.nativeElement.click(); 
    }
  }
}

