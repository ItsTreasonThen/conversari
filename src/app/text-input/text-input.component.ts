import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {
  @Input() id: string = '';

  @Input() placeholder: string = '';

  @Input() name: string = '';

  @Input() value: string = '';

  @Output() send = new EventEmitter<string>();

  ngOnInit(): void {
  }

  handleKeyUp(event: any) {
    if (event.key === 'Enter' || event.keyCode === 13) {
      this.sendMessage();
    }
  }

  handleEnter() {
    this.sendMessage();
  }

  sendMessage() {   
    this.send.emit(this.value);

    this.value = '';
  }
}
