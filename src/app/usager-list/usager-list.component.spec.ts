import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsagerListComponent } from './usager-list.component';

describe('UsagerListComponent', () => {
  let component: UsagerListComponent;
  let fixture: ComponentFixture<UsagerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsagerListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsagerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
