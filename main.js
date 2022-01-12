const { DecentraLicense } = require('./src/decentralicence.js');

class App{
  
  static run(){
    var dcl = new DecentraLicense();
    dcl.connect();
    dcl.getRate('1000000', 'uusd', 'ukrw');
  }

}


App.run();