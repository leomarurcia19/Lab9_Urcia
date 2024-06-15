import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenListasComponent } from './imagen-listas.component';

describe('ImagenListasComponent', () => {
  let component: ImagenListasComponent;
  let fixture: ComponentFixture<ImagenListasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagenListasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagenListasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
