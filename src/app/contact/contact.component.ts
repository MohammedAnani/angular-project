import { Component, Input } from '@angular/core';
import { StarComponent } from "../star/star.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [StarComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
@Input() customColor:string=''
}
