import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-script-search-gift',
  templateUrl: './script-search-gift.component.html',
  styleUrls: ['./script-search-gift.component.css']
})
export class ScriptSearchGiftComponent implements OnInit {

  public messages: string[] = [];
  public messagesStore: string[] = [
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

  constructor() { }

  ngOnInit(): void {
    let i = 0;
    const f = () => {
      if (i < this.messagesStore.length) {
        this.messages.push(this.messagesStore[i])
        i++;
        setTimeout(f, 1000);
      }
      
    };

    f();
  }

}
