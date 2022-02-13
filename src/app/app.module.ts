import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TranslateCompiler, TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MiscellaneousExampleComponentComponent } from './miscellaneous-example-component/miscellaneous-example-component.component';
import {TranslateMessageFormatCompiler} from "ngx-translate-messageformat-compiler";
import {RouterModule} from "@angular/router";
import {FeedbackComponent} from "./feedback/feedback.component";


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http,
    './assets/i18n/',
    '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MiscellaneousExampleComponentComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'de',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      compiler: {
        provide: TranslateCompiler,
        useClass: TranslateMessageFormatCompiler
      }
    }),
    BrowserAnimationsModule,
    RouterModule.forRoot(
      [
        { path: '', component: FeedbackComponent , pathMatch: 'full' },
        { path: 'miscellaneous-example', component: MiscellaneousExampleComponentComponent },
        { path: '**', component: FeedbackComponent },
      ],
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
