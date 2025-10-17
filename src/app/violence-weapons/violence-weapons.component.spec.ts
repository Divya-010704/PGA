import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViolenceWeaponsComponent } from './violence-weapons.component';

describe('ViolenceWeaponsComponent', () => {
  let component: ViolenceWeaponsComponent;
  let fixture: ComponentFixture<ViolenceWeaponsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViolenceWeaponsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViolenceWeaponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
