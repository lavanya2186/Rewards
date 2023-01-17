import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';
import { TransactionDetails } from './../../shared/models/transaction-details';
import * as moment from 'moment';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {

  userName: string;
  bill: number;
  date: number;
  month: number;
  year: number;
  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void {
  }

  addTransaction(): void {
    if (this.userName && this.bill > 0 && this.date > 0 && this.month > 0 && this.year > 0) {
      const transactionDetails = {
        name: this.userName,
        bill: this.bill,
        transactionDate: moment(new Date(this.year, this.month - 1, this.date)).format('DD-MMM-YY') as any
      } as TransactionDetails;
      this.appService.addTransaction(transactionDetails).subscribe(() => {
        this.router.navigate(['summary']);
      });
    }
  }

}
