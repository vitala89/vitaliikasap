import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProjectsBadgeComponent } from './my-projects-badge.component';

describe('MyProjectsBadgeComponent', () => {
  let component: MyProjectsBadgeComponent;
  let fixture: ComponentFixture<MyProjectsBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyProjectsBadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyProjectsBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
