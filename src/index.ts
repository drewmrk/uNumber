/**
 * Unsigned integers (numbers) in JavaScript
 *
 * @param num - Number to check
 * @param shouldReturn - Whether or not to return `num`
 * @returns The number that was checked `num`
 */
const uNumber = (num: number, shouldReturn = false): number | void => {
  if (typeof num !== 'number') {
    throw new Error('The parameter is not of the type `number`')
  }

  if (num < 0) {
    throw new Error('Number must be a non-negative value')
  } else {
    if (shouldReturn) {
      return num
    }
  }
}

/**
 * Template function for different bit sizes
 *
 * @param type Bit size
 * @param num - Number to check
 * @param shouldReturn - Whether or not to return `num`
 * @returns - The number that was checked `num`
 */
const uNumberType = (
  type: number,
  num: number,
  shouldReturn: boolean
): number | void => {
  if (typeof num !== 'number') {
    throw new Error('The parameter is not of the type `number`')
  }

  if (num >= 0 && num <= 2 ** type - 1) {
    if (shouldReturn) {
      return num
    }
  } else {
    throw new Error(`Number is a value smaller or larger than ${type}-bits`)
  }
}

/**
 * 8-bit unsigned integers (numbers) in JavaScript
 *
 * @param num - Number to check
 * @param shouldReturn - Whether or not to return `num`
 * @returns The number that was checked `num`
 */
export const uNumber8 = (num: number, shouldReturn = false): number | void =>
  uNumberType(8, num, shouldReturn)

/**
 * 16-bit unsigned integers (numbers) in JavaScript
 *
 * @param num - Number to check
 * @param shouldReturn - Whether or not to return `num`
 * @returns The number that was checked `num`
 */
export const uNumber16 = (num: number, shouldReturn = false): number | void =>
  uNumberType(16, num, shouldReturn)

/**
 * 32-bit unsigned integers (numbers) in JavaScript
 *
 * @param num - Number to check
 * @param shouldReturn - Whether or not to return `num`
 * @returns The number that was checked `num`
 */
export const uNumber32 = (num: number, shouldReturn = false): number | void =>
  uNumberType(32, num, shouldReturn)

/**
 * 53-bit unsigned integers (numbers) in JavaScript
 *
 * @param num - Number to check
 * @param shouldReturn - Whether or not to return `num`
 * @returns The number that was checked `num`
 */
export const uNumber53 = (num: number, shouldReturn = false): number | void =>
  uNumberType(53, num, shouldReturn)

export default uNumber
