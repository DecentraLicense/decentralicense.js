import { LCDClient, Coin, LCDClientConfig } from '@terra-money/terra.js';

class DecentraLicense{
  public terra: LCDClient | undefined;
  

  public connect(url: string, chainID: string ){
    let cfg: LCDClientConfig = {
      URL: url,
      chainID: chainID,
    };

    this.terra = new LCDClient(cfg);
  }




  public async getRate(amount: string, coinFrom: string, coinTo: string ){
    if ( this.terra === undefined ) throw new Error("Not connected");

    const offerCoin = new Coin(coinFrom, amount);
    var c = await this.terra.market.swapRate(offerCoin, coinTo);
    console.log(`${offerCoin.toString()} can be swapped for ${c.toString()}`);
  }

  public async test(){
    console.log("asd");
  }
  
}


export { DecentraLicense };