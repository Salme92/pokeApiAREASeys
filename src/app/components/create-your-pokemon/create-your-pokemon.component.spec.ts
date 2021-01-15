import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateYourPokemonComponent } from './create-your-pokemon.component';

describe('CreateYourPokemonComponent', () => {
  let component: CreateYourPokemonComponent;
  let fixture: ComponentFixture<CreateYourPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateYourPokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateYourPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
