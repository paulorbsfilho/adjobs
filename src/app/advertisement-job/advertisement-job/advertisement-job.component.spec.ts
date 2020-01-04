import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementJobComponent } from './advertisement-job.component';

describe('AdvertisementJobComponent', () => {
  let component: AdvertisementJobComponent;
  let fixture: ComponentFixture<AdvertisementJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertisementJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
