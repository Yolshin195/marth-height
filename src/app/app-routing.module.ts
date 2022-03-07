import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiftSearchComponent } from './compoents/gift-search/gift-search.component';
import { GiftComponent } from './compoents/gift/gift.component';
import { ReceiveGiftComponent } from './compoents/receive-gift/receive-gift.component';
import { SearchCompliteComponent } from './compoents/search-complite/search-complite.component';

const routes: Routes = [
  {path: '', component: ReceiveGiftComponent},
  {path: 'search', component: GiftSearchComponent},
  {path: 'gift', component: GiftComponent},
  {path: 'search/complite', component: SearchCompliteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
