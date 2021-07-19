import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockComponent } from 'ng-mocks';

import { MessagesComponent } from './messages.component';
import { TextInputComponent } from '../text-input/text-input.component';

const fetchInput = (fixture: any) => {
  return fixture.debugElement.query(By.directive(TextInputComponent));
}

describe('MessagesComponent', () => {
  let component: MessagesComponent;
  let fixture: ComponentFixture<MessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessagesComponent, MockComponent(TextInputComponent)],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('app-text-input', () => {
    it('should add message when message is sent', () => {
      const compiled = fixture.nativeElement;

      expect(compiled.querySelectorAll('div[data-id="messages"] > div').length).toBe(0);

      const textInput = fetchInput(fixture);

      textInput.componentInstance.send.emit('Message One');
      textInput.componentInstance.send.emit('Message Two');

      fixture.detectChanges();

      const messages = compiled.querySelectorAll('div[data-id="messages"] > div');

      expect(messages.length).toBe(2);
      // @todo Mock creating date to not make weird date assertions
      expect(messages[0].textContent).toContain(': Message One');
      expect(messages[1].textContent).toContain(': Message Two');
    });
  })
});