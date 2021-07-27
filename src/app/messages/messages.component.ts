import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html'
})
export class MessagesComponent implements OnInit {
  messages: { textContent: string, createdDate: Date }[] = [];

  constructor() { }

  ngOnInit(): void {
    // @todo load previous messages
  }

  handleSend(textContent: string) {
    console.log("Sending msg: " + textContent);
    this.messages = [...this.messages, { textContent, createdDate: new Date() }];

    // @todo send to backend with User ID/Name
  }
}
