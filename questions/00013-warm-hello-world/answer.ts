/* _____________ Your Code Here _____________ */

type HelloWorld = string // 型エイリアスを使って、string型にカスタムした名前をつける

/* _____________ Test Cases _____________ */
import type { Equal, Expect, NotAny } from '@type-challenges/utils'

// Expectは、型のテストをするために用意されているもの
type cases = [
  Expect<NotAny<HelloWorld>>,
  Expect<Equal<HelloWorld, string>>,
]
