import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoversationsComponent } from './coversations.component';

describe('CoversationsComponent', () => {
  let component: CoversationsComponent;
  let fixture: ComponentFixture<CoversationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoversationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoversationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
