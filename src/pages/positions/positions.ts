import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

@Component({
  selector: 'page-positions',
  templateUrl: 'positions.html'
})
export class PositionsPage {
  html;
  url;
  tableClass;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HTTP) {
    this.url = navParams.get('url');
    this.tableClass = navParams.get('tableClass');
    this.http.get(this.url,{},{}).then(
      data => {
        let parser = new DOMParser();
        let parsedHtml = parser.parseFromString(data.data, 'text/html');
        this.html = parsedHtml.getElementsByClassName(this.tableClass)[0].outerHTML;
      }).catch(error => {
        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);
      });
  }

}
