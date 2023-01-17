import { AppService } from './app.service';
import { Component, OnInit } from '@angular/core';
import { LicenseManager } from 'ag-grid-enterprise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Rewards';

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.cacheTransactions();
    LicenseManager.setLicenseKey('');
  }
}
