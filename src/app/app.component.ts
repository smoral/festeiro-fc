import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { PositionsPage } from '../pages/positions/positions';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, url?: string, urlBrowser?: string, tableClass?: string, arrayPosition?: number}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { 
        title: 'Posiciones',
        component: PositionsPage,
        url: 'http://www.northchamp.com.ar/m_torneos_zona_posiciones.asp?id_torneo=3148',
        urlBrowser: 'http://www.northchamp.com.ar/torneos_zona_posiciones.asp?id_torneo=3148',
        tableClass: 'texto11',
        arrayPosition: 1
      },
      { 
        title: 'Fixture',
        component: PositionsPage,
        url: 'http://www.northchamp.com.ar/m_torneos_zona_fixture.asp?id_torneo=3148',
        urlBrowser: 'http://www.northchamp.com.ar/torneos_zona_Fixture.asp?id_torneo=3148',
        tableClass: 'texto11',
        arrayPosition: 1
      },
      { 
        title: 'Jugadores',
        component: PositionsPage,
        url: 'http://www.northchamp.com.ar/equipo_detalle.asp?id_equipo=44287',
        urlBrowser: 'http://www.northchamp.com.ar/equipo_detalle.asp?id_equipo=44287',
        tableClass: 'bg_table_gral',
        arrayPosition: 0
      }
    ];

  }
  festeiro
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component, page);
  }
}
