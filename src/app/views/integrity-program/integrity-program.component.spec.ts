import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrityProgramComponent } from './integrity-program.component';

describe('IntegrityProgramComponent', () => {
  let component: IntegrityProgramComponent;
  let fixture: ComponentFixture<IntegrityProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegrityProgramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntegrityProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
