import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Sneakers } from '../models/sneakers';
import { SneakersService } from '../services/sneakers.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  sneakers: Sneakers | undefined;
  sneakersForm!: FormGroup;  

  constructor(
    private sneakersService: SneakersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id']; 
      if (!isNaN(id) && id > 0) {
        this.getProductById(id);
      } else {
        console.error('Invalid ID:', id);
        this.router.navigate(['/']);
      }
    });

    // Initialize the form group with form controls
    this.sneakersForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      price: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')]),
      category_id: new FormControl('', Validators.required),
    });
  }

  getProductById(id: number): void {    
    this.sneakersService.getProductById(id).subscribe(
      sneakers => {
        this.sneakers = sneakers;
        this.sneakersForm.patchValue(sneakers); 
      },
      error => console.error('Error fetching product:', error)
    );
  }
//updatedProduct can be updatedSneakers
  updateProduct(): void {
    if (this.sneakers && this.sneakersForm.valid) { 
      this.sneakersService.updateProduct(this.sneakers.id, this.sneakersForm.value).subscribe({
        next: (updatedProduct) => {
          console.log('Product updated:', updatedProduct);
          this.router.navigate(['/']);
        },
        error: (error) => console.error('There was an error updating the product!', error)
      });
    } else {
      console.error('No product is selected or form is invalid.');
    }
  }
  
}