import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFormComponent } from './search-form/search-form/search-form.component';
import { RepoComponent } from './repo/repo/repo.component';
import { TimePipe } from './time-pipe/time.pipe';
import { CcCardHoverDirective } from './ccCardHover-directive/cc-card-hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    RepoComponent,
    TimePipe,
    CcCardHoverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
