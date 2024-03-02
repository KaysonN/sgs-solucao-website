import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalRegulationsComponent } from './internal-regulations.component';

describe('InternalRegulationsComponent', () => {
  let component: InternalRegulationsComponent;
  let fixture: ComponentFixture<InternalRegulationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalRegulationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalRegulationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
