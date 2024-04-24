import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sneakers } from '../models/sneakers';
import { Category } from '../models/categories';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://127.0.0.1:8000';
  sneakersId: number | undefined
  constructor(private http: HttpClient) { }

  getSneakers(): Observable<Sneakers[]>{
    return this.http.get<Sneakers[]>(`${this.baseUrl}/api/sneakers/`);
  }

  createSneakers(sneakersId: Number, sneakersName: String, sneakersDesc: String, sneakersPrice: Number, sneakersImage_url: string, sneakersIs_active: boolean, sneakersCategory: number){
    return this.http.post<Sneakers>(`${this.baseUrl}/api/sneakers`,
    {
      id: sneakersId,
      name: sneakersName,
      description: sneakersDesc,
      price: sneakersPrice,
      image_url: sneakersImage_url,
      is_active: sneakersIs_active,
      category: sneakersCategory
    }
    );
  }

  getSneakersId(sneakersId: number){
    this.sneakersId = sneakersId;
  }

  deleteSneakers(sneakersId: number): Observable<any>{
    return this.http.delete(
      `${this.baseUrl}/api/sneakers/${sneakersId}/`
    )
  }

}
