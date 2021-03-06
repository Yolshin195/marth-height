import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';

import { NavbarComponent } from './compoents/navbar/navbar.component';
import { ReceiveGiftComponent } from './compoents/receive-gift/receive-gift.component';
import { ErrorReceivingGiftDialogComponent } from './compoents/error-receiving-gift-dialog/error-receiving-gift-dialog.component';
import { GiftSearchComponent } from './compoents/gift-search/gift-search.component';
import { TerminalComponent } from './compoents/terminal/terminal.component';
import { SetdMessageComponent } from './compoents/setd-message/setd-message.component';
import { GiftComponent } from './compoents/gift/gift.component';
import { ScriptSearchGiftComponent } from './compoents/script-search-gift/script-search-gift.component';
import { SearchCompliteComponent } from './compoents/search-complite/search-complite.component';
import { MessageComponent } from './compoents/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ReceiveGiftComponent,
    ErrorReceivingGiftDialogComponent,
    GiftSearchComponent,
    TerminalComponent,
    SetdMessageComponent,
    GiftComponent,
    ScriptSearchGiftComponent,
    SearchCompliteComponent,
    MessageComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatDialogModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
