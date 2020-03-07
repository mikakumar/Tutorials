import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaLandingComponent } from './persona-landing.component';

describe('PersonaLandingComponent', () => {
  let component: PersonaLandingComponent;
  let fixture: ComponentFixture<PersonaLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
