import { InvestmentService } from './../services/investment.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService);

  results = this.investmentService.resultData.asReadonly()
}
