import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludablesComponent } from './saludables.component';

describe('SaludablesComponent', () => {
  let component: SaludablesComponent;
  let fixture: ComponentFixture<SaludablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaludablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaludablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
