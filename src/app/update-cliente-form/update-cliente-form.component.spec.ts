import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateClienteFormComponent } from './update-cliente-form.component';

describe('UpdateClienteFormComponent', () => {
  let component: UpdateClienteFormComponent;
  let fixture: ComponentFixture<UpdateClienteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateClienteFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateClienteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
