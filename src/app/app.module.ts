import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VocabularyComponent } from './vocabulary/vocabulary.component';
import { APP_STORE, appReducers, appEffects } from './store';
import { EffectsModule } from '@ngrx/effects';
import { VocabularyService } from './store/vocabulary/vocabulary.service';
import { Actions } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    VocabularyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(APP_STORE, appReducers),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature(appEffects)
  ],
  providers: [
    Actions,
    VocabularyService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
