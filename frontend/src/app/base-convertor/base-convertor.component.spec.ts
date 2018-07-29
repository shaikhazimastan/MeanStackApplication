import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseConvertorComponent } from './base-convertor.component';

describe('BaseConvertorComponent', () => {
  let component: BaseConvertorComponent;
  let fixture: ComponentFixture<BaseConvertorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseConvertorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseConvertorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
