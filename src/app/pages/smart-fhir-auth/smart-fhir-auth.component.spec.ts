import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartFhirAuthComponent } from './smart-fhir-auth.component';

describe('SmartFhirAuthComponent', () => {
  let component: SmartFhirAuthComponent;
  let fixture: ComponentFixture<SmartFhirAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartFhirAuthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartFhirAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
