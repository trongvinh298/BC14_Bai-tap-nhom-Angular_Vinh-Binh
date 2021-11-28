import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalThemNguoiDungComponent } from './modal-them-nguoi-dung.component';

describe('ModalThemNguoiDungComponent', () => {
  let component: ModalThemNguoiDungComponent;
  let fixture: ComponentFixture<ModalThemNguoiDungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalThemNguoiDungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalThemNguoiDungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
