import { RewardsComponent } from './rewards.component';
import { Routes, RouterModule } from '@angular/router';
import { RewardsSummaryComponent } from './rewards-summary/rewards-summary.component';
import { MonthlySummaryComponent } from './monthly-summary/monthly-summary.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';

const routes: Routes = [
  { path: 'summary', component: RewardsSummaryComponent },
  { path: 'monthly-summary', component: MonthlySummaryComponent },
  { path: 'add-transaction', component: AddTransactionComponent }
];

export const RewardsRoutes = RouterModule.forChild(routes);
