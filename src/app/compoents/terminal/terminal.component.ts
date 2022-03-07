import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {

  public messages: string[] = [];
  public messagesPush: string[] = [
    "scp yolshin195@10.34.15.32 --port 22 --path '/home/yolshin/Document/searchGift.sh' .",
    "Download searchGift.sh: 1.5... | done!",
    "shmod +X searchGift.sh",
    "./searchGift.sh --search 'Telegram, WhatsApp, VK'",
    "Поиск мессенджеров: ...",
    "Найден: Telegram",
    "Найден: WhatsApp",
    "Найден: VK",
    "Всего найдено 3 елемента для поиска",
    "Выполняю поиск сообщений: Telegram ...",
    "Найдено: 6432 элементов",
    "Выполнятю оправку сообщений: 3 из 6432",
    "Done!",
    "exit",
    "Это пранк!",
    "Вас офицально разыграли!"
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    let i = 0;
    const f = () => {
      this.messages.push(this.messagesPush[i])
      if (i < this.messagesPush.length) {
        i++;
        setTimeout(f, 1000);
      }
      
    };

    f();

    setTimeout(() => {this.router.navigateByUrl("/search/complite")}, 15000);
  }

}
