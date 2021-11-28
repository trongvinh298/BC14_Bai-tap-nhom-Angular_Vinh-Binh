import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalThemKhoaHocComponent } from './modal-them-khoa-hoc.component';

describe('ModalThemKhoaHocComponent', () => {
  let component: ModalThemKhoaHocComponent;
  let fixture: ComponentFixture<ModalThemKhoaHocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalThemKhoaHocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalThemKhoaHocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
