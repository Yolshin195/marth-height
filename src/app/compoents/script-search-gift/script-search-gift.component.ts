import { Component, EventEmitter, OnInit, Output } from '@angular/core';

interface MessageConf {
  message: string;
  isShowDone: boolean;
  messageDone: string;
  messageDoneColor: string;
}

class MessageConflImpl implements MessageConf {
  public message: string;
  public isShowDone: boolean;
  public messageDone: string;
  public messageDoneColor: string;

  constructor(message: string, isShowDone: boolean, messageDone: string, messageDoneColor: string) {
    this.message = message;
    this.isShowDone = isShowDone;
    this.messageDone = messageDone;
    this.messageDoneColor = messageDoneColor;
  }

  static createError(message:string): MessageConf {
    return new MessageConflImpl(message, true, "ERROR", "red");
  }

  static createOk(message:string): MessageConf {
    return new MessageConflImpl(message, true, "OK", "green");
  }

  static createNotShowMessageDone(message: string): MessageConf {
    return new MessageConflImpl(message, false, "", "");
  }
}

@Component({
  selector: 'app-script-search-gift',
  templateUrl: './script-search-gift.component.html',
  styleUrls: ['./script-search-gift.component.css']
})
export class ScriptSearchGiftComponent implements OnInit {

  @Output() stopScript: EventEmitter<any> = new EventEmitter();

  public messagesTelegram: string[] = [];
  public messagesTelegramStore: string[] = [
    "Поиск Telegram: ...",
    "Вход в телеграм: ...",
    "Поиск не шифрованных сообщений: ...",
    "Найдено: 12789 элементов ..."
  ];
  public isMessageTelegramShow: boolean = false;

  public messagesWhatsApp: MessageConf[] = [];
  public messagesWhatsAppStore: MessageConf[] = [
    MessageConflImpl.createNotShowMessageDone("Done !"),
    MessageConflImpl.createOk("Поиск WhatsApp: ..."),
    MessageConflImpl.createOk("Получаю открытый ключь шифрования: ..."),
    MessageConflImpl.createOk("Отправка ключа на сервер: ..."),
    MessageConflImpl.createOk("Выполняю поиск сообщений: ..."),
    MessageConflImpl.createOk("Найдено: 7890 элементов ...")
  ];
  public isMessageWhatsAppShow: boolean = false;

  public messagesVK: MessageConf[] = [];
  public messagesVKStore: MessageConf[] = [
    MessageConflImpl.createNotShowMessageDone("Done !"),
    MessageConflImpl.createOk("Поиск VK ..."),
    MessageConflImpl.createError("Вход в VK: ..."),
    MessageConflImpl.createError("Попытка входа №2 в VK: ..."),
    MessageConflImpl.createError("Попытка входа №3 в VK: ..."),
    MessageConflImpl.createOk("Прирываю выполнения отправки сообщений из VK: ..."),
    MessageConflImpl.createOk("Удалю файл searchGift.sh: ..."),
    MessageConflImpl.createNotShowMessageDone("Это просто шутка =)"),
    MessageConflImpl.createNotShowMessageDone("Или нет ?")
  ];
  public isMessageVKShow: boolean = false;

  constructor() { }

  ngOnInit(): void {
    let i = 0;
    const f = () => {
      if (i < this.messagesTelegramStore.length) {
        this.messagesTelegram.push(this.messagesTelegramStore[i])
        i++;
        setTimeout(f, 1000);
      } else {
        this.isMessageTelegramShow = true;
      }
      
    };

    f();
  }

  onStopSendTelegramMessage() {
    let i = 0;
    const f = () => {
      if (i < this.messagesWhatsAppStore.length) {
        this.messagesWhatsApp.push(this.messagesWhatsAppStore[i])
        i++;
        setTimeout(f, 1000);
      } else {
        this.isMessageWhatsAppShow = true;
      }
      
    };

    f();
  }

  onStopSendWhatsAppMessage() {
    let i = 0;
    const f = () => {
      if (i < this.messagesVKStore.length) {
        this.messagesVK.push(this.messagesVKStore[i])
        i++;
        setTimeout(f, 1000);
      } else {
        this.isMessageVKShow = true;
        console.log("Выход из скрипта..");
        setTimeout(() => this.stopScript.emit(), 500);
      }
      
    };

    f();
  }

}
