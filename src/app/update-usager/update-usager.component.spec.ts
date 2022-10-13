import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUsagerComponent } from './update-usager.component';

describe('UpdateUsagerComponent', () => {
  let component: UpdateUsagerComponent;
  let fixture: ComponentFixture<UpdateUsagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateUsagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateUsagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
