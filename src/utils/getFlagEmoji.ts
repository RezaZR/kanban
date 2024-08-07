export default function getFlagEmoji(countryCode: string) {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    // @ts-expect-error Expected 1 arguments, but got 0: undefined index will be converted to zero
    .map(char =>  127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}