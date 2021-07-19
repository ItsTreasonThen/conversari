import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { TextInputComponent } from './text-input.component';

describe('TextInputComponent', () => {
  let component: TextInputComponent;
  let fixture: ComponentFixture<TextInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TextInputComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Input', () => {
    describe('keyup events', () => {
      it('should not dispatch send events if enter is not clicked', () => {
        const input = fixture.nativeElement.querySelector('input[type="input"]');

        spyOn(component.send, 'emit');

        const emitSpy = component.send.emit;

        input.dispatchEvent(new KeyboardEvent('keyup', {
          key: "i"
        }));

        input.dispatchEvent(new KeyboardEvent('keyup', {
          key: "ctrl"
        }));

        input.dispatchEvent(new KeyboardEvent('keyup', {
          keyCode: 5
        }));

        expect(emitSpy).toHaveBeenCalledTimes(0);
      });

      it('should dispatch input value Enter key is clicked', () => {
        const input = fixture.nativeElement.querySelector('input[type="input"]');

        spyOn(component.send, 'emit');
        const emitSpy = component.send.emit;

        input.value = 'Stuff and things';
        input.dispatchEvent(new Event('input'));

        input.dispatchEvent(new KeyboardEvent('keyup', {
          key: "Enter"
        }));

        expect(emitSpy).toHaveBeenCalledTimes(1);
        expect(emitSpy).toHaveBeenCalledWith(input.value);
      });

      it('should dispatch input value keyCode 13(Enter) is clicked', () => {
        const input = fixture.nativeElement.querySelector('input[type="input"]');

        spyOn(component.send, 'emit');
        const emitSpy = component.send.emit;

        input.value = 'Stuff and things';
        input.dispatchEvent(new Event('input'));

        input.dispatchEvent(new KeyboardEvent('keyup', {
          keyCode: 13
        }));

        expect(emitSpy).toHaveBeenCalledTimes(1);
        expect(emitSpy).toHaveBeenCalledWith(input.value);
      });
    });

    describe('Enter button', () => {
      it('should dispatch input value when the Enter button is clicked', () => {
        const componentElement = fixture.nativeElement;

        const input = componentElement.querySelector('input[type="input"]');

        spyOn(component.send, 'emit');
        const emitSpy = component.send.emit;

        componentElement.querySelector('button').dispatchEvent(new Event('click'));

        expect(emitSpy).toHaveBeenCalledTimes(1);
        expect(emitSpy).toHaveBeenCalledWith('');

        input.value = 'Stuff and things';
        input.dispatchEvent(new Event('input'));

        componentElement.querySelector('button').dispatchEvent(new Event('click'));

        expect(emitSpy).toHaveBeenCalledTimes(2);
        expect(emitSpy).toHaveBeenCalledWith(input.value);
      });
    });
  });
});
