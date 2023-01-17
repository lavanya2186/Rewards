import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('staticTabs', { static: false }) staticTabs?: TabsetComponent;
  constructor(private router: Router) { }

  @Input() tabId = 0;


  ngOnInit(): void {
    // this.staticTabs.tabs[this.tabId].active = true;
    setTimeout(() => {
      if (this.staticTabs?.tabs[this.tabId]) {
        this.staticTabs.tabs[this.tabId].active = true;
      }
    }, 300);
  }

  navigateToPage(pageName: string): void {
    this.router.navigate([pageName]);
  }

}
