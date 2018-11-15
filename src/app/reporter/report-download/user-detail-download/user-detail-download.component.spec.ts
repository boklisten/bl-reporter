import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailDownloadComponent } from './user-detail-download.component';

describe('UserDetailDownloadComponent', () => {
  let component: UserDetailDownloadComponent;
  let fixture: ComponentFixture<UserDetailDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
