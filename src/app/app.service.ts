import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpclient:HttpClient) { }
userlist(){
  return this.httpclient.get('http://localhost:3010/emp')
  
}
submit(userdetails:any){
  return this.httpclient.post ('http://localhost:3010/insert',userdetails)
}
}
