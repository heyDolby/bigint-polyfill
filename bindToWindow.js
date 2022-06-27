const BigInt = require('./index');

if (typeof window !== 'undefined' && typeof window.BigInt === 'undefined') {
  window.BigInt = BigInt;
}