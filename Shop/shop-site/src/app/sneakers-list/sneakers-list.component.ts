import { Component, OnInit } from '@angular/core';

import { Sneakers, sneakers } from '../models/sneakers';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sneakers-list',
  templateUrl: './sneakers-list.component.html',
  styleUrls: ['./sneakers-list.component.css']
})
export class SneakersListComponent implements OnInit {
  sneakers = [...sneakers];
  
  sneakersCategory: Sneakers[] | undefined;
  constructor (private route: ActivatedRoute) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;

    const categoryIdFromRoute = Number(routeParams.get("categoryId"));
    this.sneakersCategory = this.sneakers.filter(s => s.category === categoryIdFromRoute);
  }


  deleteSneakers(sneakersId: number) {
    this.sneakersCategory = this.sneakersCategory?.filter(s => s.id !== sneakersId);
  }
}