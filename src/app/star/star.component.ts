import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  standalone: true,
  imports: [],
  templateUrl: './star.component.html',
  styleUrl: './star.component.css'
})
export class StarComponent {
  @Input() stringFromHome:string='';
  @Input() customColor:string='';

}
