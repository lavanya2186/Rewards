import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { AgGridModule } from 'ag-grid-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { MonthlySummaryComponent } from './monthly-summary/monthly-summary.component';
import { NgModule } from '@angular/core';
import { RewardsComponent } from './rewards.component';
import { RewardsRoutes } from './rewards.routing';
import { RewardsSummaryComponent } from './rewards-summary/rewards-summary.component';
import { RouterModule } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';
import {MaterialExampleModule} from './material.module';

@NgModule({
  imports: [
    AgGridModule.withComponents([]),
    RewardsRoutes,
    CommonModule,
    TabsModule.forRoot(),
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MaterialExampleModule
  ],
  declarations: [RewardsComponent,
    HeaderComponent,
    RewardsSummaryComponent,
  MonthlySummaryComponent,
AddTransactionComponent],
  exports: [RouterModule]
})
export class RewardsModule { }
