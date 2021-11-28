import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSuaKhoaHocComponent } from './modal-sua-khoa-hoc.component';

describe('ModalSuaKhoaHocComponent', () => {
  let component: ModalSuaKhoaHocComponent;
  let fixture: ComponentFixture<ModalSuaKhoaHocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSuaKhoaHocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSuaKhoaHocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
