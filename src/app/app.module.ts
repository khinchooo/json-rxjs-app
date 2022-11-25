import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddSiteComponent } from './add-site/add-site.component';
import { EditSiteComponent } from './edit-site/edit-site.component';
import { SiteListComponent } from './site-list/site-list.component';
// 追加
import { RouterModule, Routes } from '@angular/router';
import { SiteService } from './site.service';

const appRoutes: Routes = [
  { path: '', component: SiteListComponent },
  { path: 'sites/add', component: AddSiteComponent },
  { path: 'sites/edit/:id', component: EditSiteComponent },
]
//

@NgModule({
  declarations: [
    AppComponent,
    AddSiteComponent,
    EditSiteComponent,
    SiteListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  // 追加
  providers: [SiteService],
  bootstrap: [AppComponent]
})
export class AppModule {}
