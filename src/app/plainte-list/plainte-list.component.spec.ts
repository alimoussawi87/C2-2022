import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlainteListComponent } from './plainte-list.component';

describe('PlainteListComponent', () => {
  let component: PlainteListComponent;
  let fixture: ComponentFixture<PlainteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlainteListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlainteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
