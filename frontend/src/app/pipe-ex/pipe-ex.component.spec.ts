import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeExComponent } from './pipe-ex.component';

describe('PipeExComponent', () => {
  let component: PipeExComponent;
  let fixture: ComponentFixture<PipeExComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeExComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
