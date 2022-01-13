import { DecentraLicense } from './decentralicence';

class App{
  
  static run(){
    var dcl = new DecentraLicense();
    dcl.connect('https://bombay-lcd.terra.dev', 'bombay-12');
    dcl.getRate('1000000', 'uusd', 'ukrw');
  }

}


App.run();