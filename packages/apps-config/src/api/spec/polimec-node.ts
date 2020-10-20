// Copyright 2017-2020 @polkadot/apps-config authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// structs need to be in order
/* eslint-disable sort-keys */

// eslint-disable-next-line header/header
export default {
  Address: 'AccountId',
  Index: 'u32',
  LookupSource: 'AccountId',
  BlockNumber: 'u32',
  Signature: 'MultiSignature',
  AccountIndex: 'u32',
  Hash: 'H256',

  Amount: 'i128',
  AmountOf: 'i128',
  Balance: 'u128',
  BalanceOf: 'u128',
  // neither Vec<8u> nor Bytes nor String works
  CurrencyId: '[u8; 8]',
  CurrencyIdOf: 'CurrencyId',
  ParaId: 'u32',
  RelayChainBlockNumber: 'BlockNumber',
  // required in 2.0.0
  RefCount: 'u32',
  // types for orml_xtokens
  ChainId: {
    _enum: {
      RelayChain: 'Null',
      ParaChain: 'ParaId'
    }
  },
  XCurrencyId: {
    chain_id: 'ChainId',
    currency_id: 'CurrencyId'
  },
  XCMPTokenMessage: {
    _enum: {
      Transfer: '(XCurrencyId, ParaId, AccountId, Balance)'
    }
  }
};
