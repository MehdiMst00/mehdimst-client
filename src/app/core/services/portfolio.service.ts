import { PortfolioCategoryListResponse } from './../dtos/portfolios/portfolio.category.list.response';
import { PortfolioCategory } from './../dtos/portfolios/portfolio.category';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Portfolio } from '../dtos/portfolios/portfolio';
import { PortfolioListResponse } from '../dtos/portfolios/portfolio.list.response';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  private categories: BehaviorSubject<PortfolioCategory[]> =
    new BehaviorSubject<PortfolioCategory[]>(null);

  constructor(private http: HttpClient) {}

  // Portfolio Category Start
  public getPortfolioCategories(): Observable<PortfolioCategoryListResponse> {
    return this.http.get<PortfolioCategoryListResponse>('portfolio/categories');
  }

  public getCurrentCategories(): Observable<PortfolioCategory[]> {
    return this.categories;
  }

  public setCurrentCategories(categories: PortfolioCategory[]) {
    this.categories.next(categories);
  }
  // Portfolio Category End

  // Portfolio Item Start
  public getPortfolios(
    categoryParam: string
  ): Observable<PortfolioListResponse> {
    return this.http.get<PortfolioListResponse>(
      `portfolio?category=${categoryParam}`
    );
  }
  // Portfolio Item End
}
