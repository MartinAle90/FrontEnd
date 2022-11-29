import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAcercaComponent } from './new-acerca.component';

describe('NewAcercaComponent', () => {
  let component: NewAcercaComponent;
  let fixture: ComponentFixture<NewAcercaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAcercaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAcercaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
