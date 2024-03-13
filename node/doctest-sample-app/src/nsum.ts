/**
 * @param n
 * @returns the sum of the n first integers
 * @example
 * const n = 5
 * const expected = 1 + 2 + 3 + 4 + 5
 * const actual = nsum(n)
 * actual == expected
 * @example nsum(3) == 1 + 2 + 3
 * @example nsum(8) == 36 // This should fail
 */
function nsum(n: number): number {
  return (n * (n + 1)) / 2;
}
