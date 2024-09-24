import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingInfoCardComponent } from './pricing-info-card.component';

describe('PricingInfoCardComponent', () => {
  let component: PricingInfoCardComponent;
  let fixture: ComponentFixture<PricingInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingInfoCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PricingInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
