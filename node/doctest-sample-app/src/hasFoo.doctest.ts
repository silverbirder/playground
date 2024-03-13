/** Does this string contain foo, ignoring case?

    hasFoo('___foo__') // => true
    hasFoo('   fOO  ') // => true
    hasFoo('Foo.') // => true
    hasFoo('bar') // => false
    hasFoo('fo') // => false
    hasFoo('oo') // => false

*/
function hasFoo(s: string): boolean {
  return null != s.match(/foo/i);
}

import "jest"
const __expect: jest.Expect = expect

    describe("hasFoo", () => {
      it("hasFoo", () => {
        __expect(hasFoo("___foo__")).toEqual(true)
        __expect(hasFoo("   fOO  ")).toEqual(true)
        __expect(hasFoo("Foo.")).toEqual(true)
        __expect(hasFoo("bar")).toEqual(false)
        __expect(hasFoo("fo")).toEqual(false)
        __expect(hasFoo("oo")).toEqual(false)})
    })
  