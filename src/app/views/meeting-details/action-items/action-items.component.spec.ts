import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionItemsComponent } from './action-items.component';

describe('ActionItemsComponent', () => {
  let component: ActionItemsComponent;
  let fixture: ComponentFixture<ActionItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionItemsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
