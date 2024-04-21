import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakersDetailsComponent } from './sneakers-details.component';

describe('SneakersDetailsComponent', () => {
  let component: SneakersDetailsComponent;
  let fixture: ComponentFixture<SneakersDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SneakersDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SneakersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
