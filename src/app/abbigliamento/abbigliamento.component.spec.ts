import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbbigliamentoComponent } from './abbigliamento.component';

describe('AbbigliamentoComponent', () => {
  let component: AbbigliamentoComponent;
  let fixture: ComponentFixture<AbbigliamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbbigliamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbbigliamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
