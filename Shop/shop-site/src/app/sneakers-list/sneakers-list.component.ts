import { Component, OnInit } from '@angular/core';
import { Sneakers } from '../models/sneakers';
import { ActivatedRoute } from '@angular/router';
import { SneakersService } from '../services/sneakers.service';

@Component({
  selector: 'app-sneakers-list',
  templateUrl: './sneakers-list.component.html',
  styleUrl: './sneakers-list.component.css'
})
export class SneakersListComponent implements OnInit{
    sneakers: Sneakers[] = []; 

    sneakersCategory: Sneakers[] | undefined;
    constructor(private route: ActivatedRoute){

    }
    
    ngOnInit(): void {
      const routeParams = this.route.snapshot.paramMap;

      const categoryIdFromRoute = Number(routeParams.get("sneakersId"));
      this.sneakersCategory = this.sneakers.filter(s => s.category === categoryIdFromRoute);

    }

    deleteSneakers(sneakersId: number){
      this.sneakersCategory = this.sneakersCategory?.filter(s => s.id !== sneakersId);
    }
}
