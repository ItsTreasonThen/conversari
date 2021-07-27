import { Component, OnInit } from '@angular/core';
import { Conversation } from '../interfaces/Conversation';
import { ConversationsService } from '../service/conversations.service';

@Component({
  selector: 'app-coversations',
  templateUrl: './coversations.component.html',
  styleUrls: ['./coversations.component.css']
})
export class CoversationsComponent implements OnInit {
  CONVERSATION_SLOTS_ON_SCREEN = 10;
  TITLE_TEXT = "Title: ";
  ID_TEXT = "ID: ";

  conversations: Conversation[] = [];

  constructor(private conversationService: ConversationsService) { }

  ngOnInit(): void {
    this.conversationService.getConversations()
    .subscribe(result => this.conversations = result);
  }

  counter(n :number) : number[] {
    return new Array(n);
  }

  //on click -> messages component loads or shows messages for that conversation

}
