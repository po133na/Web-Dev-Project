import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { SneakersService } from '../services/sneakers.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  sneakersForm!: FormGroup;

  constructor(
    private sneakersService: SneakersService,
    private router: Router  // Inject Router here
  ) {}

  ngOnInit() {
    this.sneakersForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')]),
      image: new FormControl('', [Validators.required]),
      category_id: new FormControl('', [Validators.required]),
      rating: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.sneakersForm.valid) {
      this.sneakersService.postProduct(this.sneakersForm.value).subscribe({
        next: (response: any) => {
          console.log('Product added successfully!', response);
          this.router.navigate(['/']);
        },
        error: (error: any) => {
          console.error('Error adding product:', error);
          alert('Session expired or user not authenticated. Please login again.');
        }
      });
    }
  }
}