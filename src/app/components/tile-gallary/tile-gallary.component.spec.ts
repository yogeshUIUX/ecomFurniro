import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileGallaryComponent } from './tile-gallary.component';

describe('TileGallaryComponent', () => {
  let component: TileGallaryComponent;
  let fixture: ComponentFixture<TileGallaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TileGallaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TileGallaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
