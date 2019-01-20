import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { InfoComponent } from './info/info.component';
import { ProfComponent } from './prof/prof.component';
import { RankComponent } from './rank/rank.component';
import { NewsComponent } from './news/news.component';
import { TipsComponent } from './tips/tips.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ListComponent,
    DetailComponent,
    InfoComponent,
    ProfComponent,
    RankComponent,
    NewsComponent,
    TipsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
