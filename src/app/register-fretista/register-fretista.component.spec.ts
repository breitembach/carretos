import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFretistaComponent } from './register-fretista.component';

describe('RegisterFretistaComponent', () => {
  let component: RegisterFretistaComponent;
  let fixture: ComponentFixture<RegisterFretistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterFretistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFretistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
