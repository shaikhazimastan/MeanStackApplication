import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  commonfun = function()
  {
    return "common function called";
  }
}
