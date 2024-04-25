import { Component } from '@angular/core';
import { Sneakers, sneakers } from '../models/sneakers';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-sneakers-details',
  templateUrl: './sneakers-details.component.html',
  styleUrl: './sneakers-details.component.css'
})
export class SneakersDetailsComponent {
    sneakers: Sneakers | undefined;

    constructor(private route: ActivatedRoute){}

    ngOnInit(): void {
      const routeParams = this.route.snapshot.paramMap;
      const sneakersIdFormRoute = Number(routeParams.get('sneakersId'));
      this.sneakers = sneakers.find(sneakers => sneakers.id == sneakersIdFormRoute);
    }
}
