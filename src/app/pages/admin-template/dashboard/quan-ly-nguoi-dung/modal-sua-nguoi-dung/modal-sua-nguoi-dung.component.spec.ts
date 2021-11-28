import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSuaNguoiDungComponent } from './modal-sua-nguoi-dung.component';

describe('ModalSuaNguoiDungComponent', () => {
  let component: ModalSuaNguoiDungComponent;
  let fixture: ComponentFixture<ModalSuaNguoiDungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSuaNguoiDungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSuaNguoiDungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
