import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GridApi, Module } from 'ag-grid-community';
import { AppService } from 'src/app/app.service';
import { TransactionDetails } from './../../shared/models/transaction-details';

@Component({
  selector: 'app-rewards-summary',
  templateUrl: './rewards-summary.component.html',
  styleUrls: ['./rewards-summary.component.css']
})
export class RewardsSummaryComponent implements OnInit {

   gridApi: GridApi;
   gridColumnApi;

   columnDefs;
   defaultColDef;
   autoGroupColumnDef;
  rowData: TransactionDetails[];

  constructor(private http: HttpClient,
              private appService: AppService) {
    this.columnDefs = [
      {
        field: 'name',
         rowGroup: true,
         hide: true
      },
      {
        field: 'month',
         rowGroup: true,
         hide: true
      },
      {
        field: 'bill',
        aggFunc: 'sum',
      },
      {
        field: 'rewards',
        aggFunc: 'sum',
      },
      { field: 'transactionDate' }
    ];
    this.defaultColDef = {
      flex: 1,
      minWidth: 150,
      sortable: true,
      resizable: true,
    };
    this.autoGroupColumnDef = {
      headerName: 'Name',
      field: 'name',
      minWidth: 300
    };
  }

  onGridReady(params): void {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.appService.getAllTranactionsForService(true).subscribe(data => {
      this.rowData = data;
    });


  }

  ngOnInit(): void {

  }

}
