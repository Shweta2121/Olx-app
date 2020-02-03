import { Injectable } from "@angular/core";
import { IFilterModels } from "src/app/core/interfaces/common-model";
import { Observable, BehaviorSubject } from "rxjs";
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class FilterService {
  private _filterProducts: IFilterModels = {
    location: null,
    category: null,
  };

  private behavioursubject$: BehaviorSubject<IFilterModels> = new BehaviorSubject<IFilterModels>(this._filterProducts);

  private filterObs: Observable<IFilterModels> = this.behavioursubject$.asObservable();

  constructor() { }

  get filtersserve() {
    return this.filterObs;
  }
  async filterLocation(location: number) {
    const currentFilter = await this.filtersserve.pipe(take(1)).toPromise();
    const currentItems = currentFilter.location = location;
    this.behavioursubject$.next(currentFilter);
    return currentFilter;
  }
  async filterCategory(category: number) {
    const currentFilter = await this.filtersserve.pipe(take(1)).toPromise();
    const currentItems = currentFilter.category = category;
    this.behavioursubject$.next(currentFilter);
    return currentFilter;
  }
}
