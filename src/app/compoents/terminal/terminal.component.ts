import { Component, ElementRef, OnInit, ViewChild, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit, AfterViewChecked {

  @ViewChild('terminal') private terminalRef?: ElementRef;

  public isRunScript: boolean = false;
  public messagesStepsRunScript: string[] = [];
  public stepsRunScript: string[] = [
    "scp yolshin195@10.34.15.32 --port 22 --path '/home/yolshin/Document/searchGift.sh' .",
    "Download searchGift.sh: 1.5... | done!",
    "shmod +X searchGift.sh",
    "./searchGift.sh --search 'Telegram, WhatsApp, VK'"
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    let i = 0;
    const f = () => {
      if (i < this.stepsRunScript.length) {
        this.messagesStepsRunScript.push(this.stepsRunScript[i])
        i++;
        setTimeout(f, 1000);
      } 
      else {
        this.isRunScript = true;
      }
      
    };

    f();

    //setTimeout(() => {this.router.navigateByUrl("/search/complite")}, 15000);
  }

  ngAfterViewChecked() {        
    this.scrollToBottom();        
  } 

  scrollToBottom(): void {
    try {
        if (this.terminalRef != null) {
          console.log("scroll! ", this.terminalRef.nativeElement.scrollHeight)
          this.terminalRef.nativeElement.scrollTop = this.terminalRef.nativeElement.scrollHeight;
        }
    } catch(err) { }                 
}

}
