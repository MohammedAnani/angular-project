import { Component } from '@angular/core';
import { StarComponent } from "../star/star.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [StarComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  imagesPortfolios:string[]=[
    './assets/images/p-10.jpg',
    './assets/images/p-11.jpg',
    './assets/images/p2-.jpg',
    './assets/images/p-11.jpg',
    './assets/images/p-5.jpg',
    './assets/images/p-10.jpg',
  ]
  isHiding:boolean=true;
  modelImage:string='';
  clickMe(element:EventTarget | null ,img:HTMLImageElement){
    if(element==img)
    {
      return;
    }
    else{
      this.isHiding=true
    }
  }

}
