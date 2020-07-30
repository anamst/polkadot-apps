export default {
  Address: 'AccountId',
  BlockNumber: 'u64',
  Index: 'u64',
  LookupSource: 'AccountId',
  Signature: 'MultiSignature',

  DelegationNodeId: 'Hash',
  ErrorCode: 'u16',
  StoredAttestation: {
    0: 'Hash',
    1: 'AccountId',
    2: 'Option<DelegationNodeId>',
    3: 'bool'
  }
};
