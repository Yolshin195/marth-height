import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-setd-message',
  templateUrl: './setd-message.component.html',
  styleUrls: ['./setd-message.component.css']
})
export class SetdMessageComponent implements OnInit {

  @Input() message: string = "Выполнятю оправку сообщений";
  @Input() steps: number = 0;
  @Output() stop: EventEmitter<any> = new EventEmitter();
  currentStep: number = 0;
  step: number = 1;

  constructor() { }

  ngOnInit(): void {
    this.step = this.steps / 100;
    const increment = () => {
      if (this.currentStep < this.steps) {
        this.currentStep += this.step;
        setTimeout(increment, 50);
      } else {
        this.stop.emit();
      }
    }

    increment();
  }

}
