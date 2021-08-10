import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewClienteFormComponent } from './new-cliente-form.component';

describe('NewClienteFormComponent', () => {
  let component: NewClienteFormComponent;
  let fixture: ComponentFixture<NewClienteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewClienteFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewClienteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
