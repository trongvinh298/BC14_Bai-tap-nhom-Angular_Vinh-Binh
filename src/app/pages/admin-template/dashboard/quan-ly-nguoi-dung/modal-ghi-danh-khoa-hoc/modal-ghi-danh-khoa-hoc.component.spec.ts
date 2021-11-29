import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalGhiDanhKhoaHocComponent } from './modal-ghi-danh-khoa-hoc.component';

describe('ModalGhiDanhKhoaHocComponent', () => {
  let component: ModalGhiDanhKhoaHocComponent;
  let fixture: ComponentFixture<ModalGhiDanhKhoaHocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalGhiDanhKhoaHocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalGhiDanhKhoaHocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
