import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppService } from './app.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './login/login.module';
import { NgModule } from '@angular/core';
import { RewardsModule } from './rewards/rewards.module';
import { TabsModule } from 'ngx-bootstrap/tabs';


@NgModule({
  declarations: [
    AppComponent
   ],
  imports: [
    TabsModule.forRoot(),
    LoginModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RewardsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
