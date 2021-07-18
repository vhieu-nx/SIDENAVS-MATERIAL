import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OderNewComponent } from './oder-new.component';

describe('OderNewComponent', () => {
  let component: OderNewComponent;
  let fixture: ComponentFixture<OderNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OderNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OderNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
