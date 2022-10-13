import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUsagerComponent } from './create-usager.component';

describe('CreateUsagerComponent', () => {
  let component: CreateUsagerComponent;
  let fixture: ComponentFixture<CreateUsagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUsagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUsagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
