import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualChurchComponent } from './virtual-church.component';

describe('VirtualChurchComponent', () => {
  let component: VirtualChurchComponent;
  let fixture: ComponentFixture<VirtualChurchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualChurchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualChurchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
