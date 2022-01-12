const { LCDClient, Coin } = require('@terra-money/terra.js');

class DecentraLicense{

  connect(options){
    if (options === undefined) {options = {};}
    options.URL = 'https://bombay-lcd.terra.dev';
    options.chainID = 'bombay-12';
    this.terra = new LCDClient(options);
  }


  getRate(amount, coinFrom, coinTo){
    const offerCoin = new Coin(coinFrom, amount);
    this.terra.market.swapRate(offerCoin, coinTo).then(c => {
      console.log(`${offerCoin.toString()} can be swapped for ${c.toString()}`);
    });
  }
}


module.exports = { DecentraLicense }