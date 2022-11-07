import { CompaniesInterface } from './../../../interfaces/CompaniesInterface';
import { CompaniesService } from './../../../services/compagnies/companies-service.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss'],
})
export class DashbordComponent implements OnInit {
  compagnies: CompaniesInterface[] = [];
  selectorArray: string[] = ['Electronic', 'Electronic_aot'];
  companiesFilter: string[] = [];

  constructor(private companiesService: CompaniesService) {}

  ngOnInit(): void {
    console.log('init DashbordComponent');
    this.loadCompagnies();
  }

  loadCompagnies() {
    this.companiesService.getCompanies().subscribe(
      (response: CompaniesInterface[]) => {
        // this.companiesService.setCompanies(response);
        this.compagnies = response;
        this.selectorArray = this.setSelectorArray();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  setSelectorArray(): string[] {
    let output: string[] = [];
    this.compagnies.forEach((item) => {
      if (!this.selectorArray.includes(item.sector)) {
        console.log(item.sector);
        output.push(item.sector);
      }
    });

    return output;
  }

  setFilter(key: string) {
    if (key === 'selector') {
      this.selectorArray.forEach(element => {
        console.log(element, this.selectorArray);
        // console.log(JSON.parse(element));

      });
    }
  }

  withFilter(): CompaniesInterface[] {
    let output: CompaniesInterface[] = this.compagnies;

    // WITH SELECTOR
    if (this.selectorArray.length > 0) {
      output = output.filter((company) =>
        this.selectorArray.includes(company.sector)
      );
    }

    return output;
  }
}
