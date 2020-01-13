import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertiseJobComponent } from './advertise-job.component';

describe('AdvertiseJobComponent', () => {
  let component: AdvertiseJobComponent;
  let fixture: ComponentFixture<AdvertiseJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertiseJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertiseJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
