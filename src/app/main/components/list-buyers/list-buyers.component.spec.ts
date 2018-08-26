import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBuyersComponent } from './list-buyers.component';

describe('ListBuyersComponent', () => {
  let component: ListBuyersComponent;
  let fixture: ComponentFixture<ListBuyersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBuyersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBuyersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
