import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialeAngularComponent } from './materiale-angular.component';

describe('MaterialeAngularComponent', () => {
  let component: MaterialeAngularComponent;
  let fixture: ComponentFixture<MaterialeAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialeAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialeAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
