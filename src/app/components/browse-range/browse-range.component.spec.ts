import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseRangeComponent } from './browse-range.component';

describe('BrowseRangeComponent', () => {
  let component: BrowseRangeComponent;
  let fixture: ComponentFixture<BrowseRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowseRangeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowseRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
