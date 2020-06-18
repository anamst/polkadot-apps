// Copyright 2017-2020 @polkadot/apps-config authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export default {
  Address: 'AccountId',
  BlockNumber: 'u64',
  DelegationNodeId: 'Hash',
  ErrorCode: 'u16',
  Index: 'u64',
  LookupSource: 'AccountId',
  Signature: 'MultiSignature',
  StoredAttestation: {
    0: 'Hash',
    1: 'AccountId',
    2: 'Option<DelegationNodeId>',
    3: 'bool'
  }
};
