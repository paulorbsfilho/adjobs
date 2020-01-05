import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementJobDetailComponent } from './advertisement-job-detail.component';

describe('AdvertisementJobDetailComponent', () => {
  let component: AdvertisementJobDetailComponent;
  let fixture: ComponentFixture<AdvertisementJobDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertisementJobDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementJobDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
