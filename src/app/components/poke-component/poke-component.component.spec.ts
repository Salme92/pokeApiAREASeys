import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeComponentComponent } from './poke-component.component';

describe('PokeComponentComponent', () => {
  let component: PokeComponentComponent;
  let fixture: ComponentFixture<PokeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
