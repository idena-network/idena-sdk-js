export const DNA_BASE = '1000000000000000000';

function isHexPrefixed(str: string): boolean {
  return str.slice(0, 2) === '0x';
}

export function stripHexPrefix(str: string): string {
  if (typeof str !== 'string') {
    return str;
  }
  return isHexPrefixed(str) ? str.slice(2) : str;
}

export function hexToUint8Array(hexString: string): Uint8Array {
  const str = stripHexPrefix(hexString);

  const arrayBuffer = new Uint8Array(str.length / 2);

  for (let i = 0; i < str.length; i += 2) {
    const byteValue = parseInt(str.substring(i, i + 2), 16);
    arrayBuffer[i / 2] = byteValue;
  }

  return arrayBuffer;
}

export function toHexString(
  byteArray: Uint8Array | number[],
  withPrefix = false,
) {
  return (
    (withPrefix ? '0x' : '') +
    Array.from(byteArray, function (byte) {
      return `0${(byte & 0xff).toString(16)}`.slice(-2);
    }).join('')
  );
}
