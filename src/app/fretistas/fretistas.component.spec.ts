import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FretistasComponent } from './fretistas.component';

describe('FretistasComponent', () => {
  let component: FretistasComponent;
  let fixture: ComponentFixture<FretistasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FretistasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FretistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
