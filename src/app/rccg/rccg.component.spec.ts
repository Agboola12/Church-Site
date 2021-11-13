import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RccgComponent } from './rccg.component';

describe('RccgComponent', () => {
  let component: RccgComponent;
  let fixture: ComponentFixture<RccgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RccgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RccgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
