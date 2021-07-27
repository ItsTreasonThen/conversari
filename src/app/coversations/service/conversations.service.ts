import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Conversation } from '../interfaces/Conversation';
import { CONVERSATIONS } from '../interfaces/mock-conversations';
@Injectable({
  providedIn: 'root'
})
export class ConversationsService {
  constructor() { }

  public getConversations() : Observable<Conversation[]> {
    return of(CONVERSATIONS);
  }
}

