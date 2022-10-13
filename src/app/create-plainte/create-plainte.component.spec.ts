import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePlainteComponent } from './create-plainte.component';

describe('CreatePlainteComponent', () => {
  let component: CreatePlainteComponent;
  let fixture: ComponentFixture<CreatePlainteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePlainteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePlainteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
