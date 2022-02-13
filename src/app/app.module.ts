import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFormComponent } from './search-form/search-form/search-form.component';
import { RepoComponent } from './repo/repo/repo.component';
import { TimePipe } from './time-pipe/time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    RepoComponent,
    TimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
