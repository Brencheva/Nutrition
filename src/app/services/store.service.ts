import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { Store } from '../interfaces/store';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private store: BehaviorSubject<Store>;
  public store$: Observable<Store>;

  constructor() {
    this.store = new BehaviorSubject<Store>({
      recipes: [],
    });
    this.store$ = this.store.asObservable();
  }

  public setItem(key: keyof Store, value: any) {
    this.store.next({
      ...this.store.getValue(),
      [key]: value,
    });
  }

  public getItem(key: keyof Store): any {
    return this.store.getValue()[key];
  }

  public getItem$(key: keyof Store): Observable<any> {
    return this.store$
      .pipe(
        map((store: Store) => store[key]),
        distinctUntilChanged(),
      );
  }
}
