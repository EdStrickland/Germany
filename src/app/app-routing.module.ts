import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { InfoComponent } from './info/info.component';
import { NewsComponent } from './news/news.component';
import { ProfComponent } from './prof/prof.component';
import { TipsComponent } from './tips/tips.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'index', component: IndexComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'info', component: InfoComponent },
  { path: 'rank', component: ListComponent },
  { path: 'news', component: NewsComponent },
  { path: 'prof', component: ProfComponent },
  { path: 'tips', component: TipsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
