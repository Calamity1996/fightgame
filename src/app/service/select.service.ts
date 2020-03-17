import { Injectable } from '@angular/core';
import { Fight } from '../classes/Fight';

@Injectable({
  providedIn: 'root'
})
export class SelectService {

  public fights : Fight[] = [];
  constructor() { }
}
