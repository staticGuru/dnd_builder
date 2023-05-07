export function UniqueIdGenerator(prefix) {
  const timestamp = Date.now();
  const randomNumber = Math.random();
  const hexadecimalString = randomNumber.toString(16);
  return `${prefix.split("-")[0]}-${timestamp}-${hexadecimalString}`;
}
