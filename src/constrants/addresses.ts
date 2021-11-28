export const polyMatic = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
export const polyAAVEAddressProvider =
  "0xd05e3E715d945B59290df0ae8eF85c1BdB684744";
export const dex1inch = "0x11111112542D85B3EF69AE05771c2dCCff4fAa26";

type ERC20Map = { [erc20: string]: string };

export const erc20Address: ERC20Map = {
  DAI: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
  WETH: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
  USDC: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
  USDT: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
  WMATIC: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
};

type PoolMap = { [pair: string]: string };

export const dodoV2Pool: PoolMap = {
  USDC_DAI: "0xaaE10Fa31E73287687ce56eC90f81A800361B898",
  USDT_DAI: "0xDa43a4aAB20D313Ab3AA07d8E09f3521F32a3D83",
  WETH_USDC: "0x5333Eb1E32522F1893B7C9feA3c263807A02d561",
  WMATIC_USDT: "0x2144EE9e47998E0d7Ea990252d6Fe63107a31018",
  WMATIC_USDC: "0x10Dd6d8A29D489BEDE472CC1b22dc695c144c5c7",
  WMATIC_WETH: "0xC877D7BbCB5b40C3F3d7e7E0d0DA6220BEE027a1",
  USDC_USDT: "0x56FF5E27d40FBF746ADaa3DA820ADb2056F225E7",
};

type RouterMap = { [protocol: string]: string };

export const uniswapRouter: RouterMap = {
  POLYGON_SUSHISWAP: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
  POLYGON_QUICKSWAP: "0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff",
  POLYGON_APESWAP: "0xC0788A3aD43d79aa53B09c2EaCc313A787d1d607",
  POLYGON_JETSWAP: "0x5C6EC38fb0e2609672BDf628B1fD605A523E5923",
  POLYGON_POLYCAT: "0x94930a328162957FF1dd48900aF67B5439336cBD",
  POLYGON_WAULTSWAP: "0x3a1D87f206D12415f5b0A33E786967680AAb4f6d",
};
