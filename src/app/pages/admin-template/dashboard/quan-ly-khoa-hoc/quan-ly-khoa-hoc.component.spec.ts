import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyKhoaHocComponent } from './quan-ly-khoa-hoc.component';

describe('QuanLyKhoaHocComponent', () => {
  let component: QuanLyKhoaHocComponent;
  let fixture: ComponentFixture<QuanLyKhoaHocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanLyKhoaHocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLyKhoaHocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
