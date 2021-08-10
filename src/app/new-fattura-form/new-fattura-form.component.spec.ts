import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFatturaFormComponent } from './new-fattura-form.component';

describe('NewFatturaFormComponent', () => {
  let component: NewFatturaFormComponent;
  let fixture: ComponentFixture<NewFatturaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFatturaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFatturaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
