// Copyright 2017-2020 @polkadot/apps-config authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// structs need to be in order
/* eslint-disable sort-keys */

// eslint-disable-next-line header/header
export default {
  Address: 'AccountId',
  Index: 'u32',
  LookupSource: 'Address',
  BlockNumber: 'u32',
  Signature: 'MultiSignature',
  AccountIndex: 'u32',
  Hash: 'H256',

  Keys: 'SessionKeys2',
  Amount: 'i128',
  AmountOf: 'i128',
  Balance: 'u128',
  BalanceOf: 'Balance',

  CurrencyId: '[u8; 8]',
  CurrencyIdOf: 'CurrencyId',

  SessionStatus: {
    _enum: [
      'Outdated',
      'UpToDate'
    ]
  },

  UserVote: {
    amount: 'BalanceOf',
    approve: 'Option<bool>'
  },

  CouncilMember: {
    points: 'u32',
    currency_id: 'CurrencyIdOf',
    account_id: 'AccountId',
    validator_id: 'ValidatorId'
  },

  CouncilMemberApplicant: {
    council_member: 'CouncilMember',
    total_issuance: 'BalanceOf'
  },

  Ballot: {
    yes_votes: 'BalanceOf',
    no_votes: 'BalanceOf'
  },

  CouncilVote: {
    vote: 'bool',
    applicant: 'AccountId',
    votes: 'BTreeMap<CurrencyIdOf<T>, Ballot<T>>'
  },

  // required in 2.0.0
  RefCount: 'u32'
};
