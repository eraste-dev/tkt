import { CompaniesInterface } from './../../interfaces/CompaniesInterface';
import { API } from './../../api/api';
import { CoreServiceService } from './../core-service.service';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService implements OnInit, OnDestroy {
  debug: boolean = false;
  link_all: string = '';
  link_single: string = '';

  private companies: CompaniesInterface[] = [];
  private companiesSource = new BehaviorSubject(this.companies);
  companiesObservable = this.companiesSource.asObservable();

  constructor(private coreServiceService: CoreServiceService) {}

  ngOnInit(): void {
    this.companiesObservable.subscribe((data: any) => {
      console.log('👉👉👉👉', data);
    });
  }

  ngOnDestroy(): void {}

  getCompanies(): Observable<any> {
    return this.coreServiceService._get(API.biz);
  }

  getCompanyDetail(id: number): Observable<any> {
    return this.coreServiceService._get(API.bizDetail(id));
  }

  setCompanies(data: CompaniesInterface[]): void {
    if (this.debug) console.info('CompaniesService');
    return this.companiesSource.next(data);
  }
}
