import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradicionalesComponent } from './tradicionales.component';

describe('TradicionalesComponent', () => {
  let component: TradicionalesComponent;
  let fixture: ComponentFixture<TradicionalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TradicionalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TradicionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
