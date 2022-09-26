import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpclient:HttpClient) { }
getuser(){
  return this.httpclient.get('http://localhost:3010/emp')
  
}
}
