import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() message: string = "";
  @Input() messageDone: string = "OK";
  @Input() messageDoneColor: string = "green";
  @Input() isShowDone: boolean = true;
  isDone: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if (this.isShowDone) {
      setTimeout(() => {this.isDone = true}, 500);
    }
  }

}
