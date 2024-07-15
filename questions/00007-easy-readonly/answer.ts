/*
  7 - Readonly
  -------
  by Anthony Fu (@antfu) #初級 #built-in #readonly #object-keys

  ### 質問

  組み込みの型ユーティリティ`Readonly<T>`を使用せず、`T` のすべてのプロパティを読み取り専用にする型を実装します。実装された型のプロパティは再割り当てできません。

  例えば：

  ```ts
  interface Todo {
    title: string
    description: string
  }

  const todo: MyReadonly<Todo> = {
    title: "Hey",
    description: "foobar"
  }

  todo.title = "Hello" // Error: cannot reassign a readonly property
  todo.description = "barFoo" // Error: cannot reassign a readonly property
  ```

  > GitHubで確認する：https://tsch.js.org/7/ja
*/
/* _____________ ここにコードを記入 _____________ */

type MyReadonly<T> = {
  readonly　[key in　keyof T]: T[key]
}

/* _____________ 最初に間違えたコード _____________ */

//　readonlyはプロパティ名の前
// in T だとKはTのプロパティの部分集合
// K in T(Mapped Type)で使うときは[]で囲む必要がある。
// Mapped Typesは主にユニオン型と組み合わせて使います。inのあとの変数はジェネリクスの型ではだめ。keyofでユニオン型にする
type MyReadonlyBad<T> = {
  K in T: readonly T[K]
}
type MyReadonlyBad2<T> = {
  readonly [K in T]:  T[K]
}

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>,
]

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/7/answer/ja
  > 解答を見る：https://tsch.js.org/7/solutions
  > その他の課題：https://tsch.js.org/ja
*/