import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedRecipesComponent } from './saved-recipes.component';

describe('FavoriteRecipesComponent', () => {
  let component: SavedRecipesComponent;
  let fixture: ComponentFixture<SavedRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedRecipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
