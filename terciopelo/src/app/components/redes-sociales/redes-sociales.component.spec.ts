import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedesSocialesComponent } from './redes-sociales.component';

describe('RedesSocialesComponent', () => {
  let component: RedesSocialesComponent;
  let fixture: ComponentFixture<RedesSocialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedesSocialesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedesSocialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
