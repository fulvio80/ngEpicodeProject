import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFatturaFormComponent } from './update-fattura-form.component';

describe('UpdateFatturaFormComponent', () => {
  let component: UpdateFatturaFormComponent;
  let fixture: ComponentFixture<UpdateFatturaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFatturaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFatturaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
