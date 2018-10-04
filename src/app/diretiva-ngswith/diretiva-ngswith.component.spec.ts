import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaNgswithComponent } from './diretiva-ngswith.component';

describe('DiretivaNgswithComponent', () => {
  let component: DiretivaNgswithComponent;
  let fixture: ComponentFixture<DiretivaNgswithComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiretivaNgswithComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivaNgswithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
