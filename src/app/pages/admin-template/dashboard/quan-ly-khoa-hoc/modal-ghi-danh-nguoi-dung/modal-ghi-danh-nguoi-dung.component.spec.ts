import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalGhiDanhNguoiDungComponent } from './modal-ghi-danh-nguoi-dung.component';

describe('ModalGhiDanhNguoiDungComponent', () => {
  let component: ModalGhiDanhNguoiDungComponent;
  let fixture: ComponentFixture<ModalGhiDanhNguoiDungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalGhiDanhNguoiDungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalGhiDanhNguoiDungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
