import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0x3d39C1F59b10248Adc342CD858168bB0d312577A"
);

export default instance;
