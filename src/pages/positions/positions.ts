import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { LoadingController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-positions',
  templateUrl: 'positions.html'
})
export class PositionsPage {
  html;
  url;
  urlBrowser;
  tableClass;
  title;
  arrayPosition;
  
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, public http: HTTP,
    public loadingCtrl: LoadingController,
    private iab: InAppBrowser
  ) {
    this.url = navParams.get('url');
    this.urlBrowser = navParams.get('urlBrowser');
    this.tableClass = navParams.get('tableClass');
    this.title = navParams.get('title');
    this.arrayPosition = navParams.get('arrayPosition');
    const loading = this.loadingCtrl.create({
      content: 'Cargando '+this.title+'...',
      duration: 15000
    });
    loading.present();
    this.http.get(this.url,{},{}).then(
      data => {
        let parser = new DOMParser();
        let parsedHtml = parser.parseFromString(data.data, 'text/html');
        this.html = parsedHtml.getElementsByClassName(this.tableClass)[this.arrayPosition].outerHTML;
        loading.dismiss();
      }).catch(error => {
        loading.dismiss();
        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);
      });
  }
  
  openBrowser() {
    this.iab.create(this.urlBrowser, '_system');
  }

}
