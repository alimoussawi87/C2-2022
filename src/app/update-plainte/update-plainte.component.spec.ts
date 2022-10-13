import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePlainteComponent } from './update-plainte.component';

describe('UpdatePlainteComponent', () => {
  let component: UpdatePlainteComponent;
  let fixture: ComponentFixture<UpdatePlainteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePlainteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePlainteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
