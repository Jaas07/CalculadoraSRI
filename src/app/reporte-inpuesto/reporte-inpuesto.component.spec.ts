import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteInpuestoComponent } from './reporte-inpuesto.component';

describe('ReporteInpuestoComponent', () => {
  let component: ReporteInpuestoComponent;
  let fixture: ComponentFixture<ReporteInpuestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReporteInpuestoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteInpuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
