import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { StarComponent } from "../star/star.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, StarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  strHome:string='START FRAMWORK'

}
