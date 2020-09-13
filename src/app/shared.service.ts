import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class SharedService {

  private message = new BehaviorSubject('false');
  sharedMessage = this.message.asObservable();

  



  private record = new BehaviorSubject('null');
  sharedRecord = this.record.asObservable();

  constructor() { }

  nextMessage(message: string) {
    this.message.next(message)
  }

  

  nextRecord(record){
    this.record.next(record)
  }




}
