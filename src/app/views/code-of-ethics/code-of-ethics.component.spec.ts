import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeOfEthicsComponent } from './code-of-ethics.component';

describe('CodeOfEthicsComponent', () => {
  let component: CodeOfEthicsComponent;
  let fixture: ComponentFixture<CodeOfEthicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeOfEthicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeOfEthicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
