import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesRemotasComponent } from './solicitudes-remotas.component';

describe('SolicitudesRemotasComponent', () => {
  let component: SolicitudesRemotasComponent;
  let fixture: ComponentFixture<SolicitudesRemotasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolicitudesRemotasComponent]
    });
    fixture = TestBed.createComponent(SolicitudesRemotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
