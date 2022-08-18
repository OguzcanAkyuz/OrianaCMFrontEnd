import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbroadInvestmentRelation } from 'app/models/abroadInvestmentRelation';
import { AbroadInvestmentService } from 'app/services/abroad-investment.service';

@Component({
  selector: 'app-abroadinvestment-list',
  templateUrl: './abroadinvestment-list.component.html',
  styleUrls: ['./abroadinvestment-list.component.scss'],
})
export class AbroadinvestmentListComponent implements OnInit {
  abroadInvestments: AbroadInvestmentRelation[] = [];
  dataLoaded = false;

  constructor(
    private abroadInvestmentService: AbroadInvestmentService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAbroadInvestmentRelations();
  }

  getAbroadInvestmentRelations() {
    this.abroadInvestmentService
      .getAbroadInvestments()
      .subscribe((response) => {
        this.abroadInvestments = response.data;
        this.dataLoaded = true;
      });
  }
}
