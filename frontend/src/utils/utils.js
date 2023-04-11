import sha256 from 'crypto-js/sha256';

export function hash(str) {
  return new Promise((resolve) => {
    const hashedStr = sha256(str).toString();
    resolve(hashedStr);
  });
}
