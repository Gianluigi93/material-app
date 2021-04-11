import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioComponenteComponent } from './dettaglio-componente.component';

describe('DettaglioComponenteComponent', () => {
  let component: DettaglioComponenteComponent;
  let fixture: ComponentFixture<DettaglioComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DettaglioComponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DettaglioComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
