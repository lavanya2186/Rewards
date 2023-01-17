import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { TransactionDetails } from './shared/models/transaction-details';
import * as _ from 'lodash';
import * as moment from 'moment';

@Injectable()
export class AppService {
  constructor(private httpClient: HttpClient) {}

  cacheTransactions(): void {
    const cache = localStorage.getItem('transactions');
    if (!cache) {
      this.httpClient.get('/assets/data.json').subscribe((data) => {
        localStorage.setItem('transactions', JSON.stringify(data));
      });
    }
  }

  addTransaction(transactionDetail: TransactionDetails): Observable<boolean> {
    const transactions: TransactionDetails[] = JSON.parse(
      localStorage.getItem('transactions')
    );
    transactions.push(transactionDetail);
    localStorage.setItem('transactions', JSON.stringify(transactions));
    return of(true);
  }

  getAllTranactionsForService(isOnly3MonthsData: boolean = false): Observable<TransactionDetails[]> {
    let transactions: TransactionDetails[] = JSON.parse(
      localStorage.getItem('transactions')
    );
    if(isOnly3MonthsData) {
      transactions = transactions.filter(x => new Date(x.transactionDate) > new Date('11-01-2022'));
    }
    this.sortTransactions(transactions);
    this.updateTransactionDetails(transactions);
    return of(transactions);
  }

  private sortTransactions(transactions: TransactionDetails[]): void {
    transactions.sort((a, b) => (new Date(b.transactionDate) as any) - (new Date(a.transactionDate) as any));
  }

  private updateTransactionDetails(transactions: TransactionDetails[]): void {
    _.each(transactions, (transaction) => {
      transaction.rewards = this.getRewardsForTransaction(transaction.bill);
      transaction.month = moment(new Date(transaction.transactionDate)).format('MMM-YY');
    });
  }

  private getRewardsForTransaction(bill: number): number {
    let rewards = 0;
    if (bill > 50 && bill < 100) {
      rewards = (Math.floor(bill) - 50);
    } else if (bill >= 100) {
      rewards = 50 + ((Math.floor(bill) - 100) * 2);
    }
    return rewards;
  }
}
