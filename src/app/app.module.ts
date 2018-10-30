
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store'

import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { YearpickerComponent } from './yearpicker/yearpicker.component'
import { MassfilterComponent } from './massfilter/massfilter.component'
import { MeteorComponent } from './meteor/meteor.component'
import { meteorsReducer } from './redux/meteors.reducer'



@NgModule({
  declarations: [
    AppComponent,
    MeteorComponent,
    YearpickerComponent,
    MassfilterComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({meteorsPage: meteorsReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
