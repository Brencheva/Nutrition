import {EventEmitter, Injectable} from '@angular/core';
import {filter, map, startWith} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private _store: Map<StoreField, any> = new Map();

  private _state$: EventEmitter<any> = new EventEmitter<any>();

  setState = (key: StoreField, state: any): void => {
    this._store.set(key, state);
    this._state$.emit(key);
  };

  getState = (key: StoreField): any => {
    return this._store.get(key);
  };

  onStateUpdate$ = (stateKey: StoreField) => {
    return this._state$.pipe(
      startWith(stateKey),
      filter((changedKey: StoreField) => changedKey === stateKey),
      map((changedKey: StoreField) => this.getState(changedKey))
    );
  };
}

export enum StoreField {
  RECIPES = 'recipes'
}
