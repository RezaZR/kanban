const OFFSET_TO_FLAG_CODE_POINT = 127397;

export default function getFlagEmoji(countryCode: string) {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    // @ts-expect-error Expected 1 arguments, but got 0: undefined index will be converted to zero
    .map(char =>  OFFSET_TO_FLAG_CODE_POINT + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}