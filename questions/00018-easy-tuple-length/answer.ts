/*
  18 - Length of Tuple
  -------
  by sinoon (@sinoon) #初級 #tuple

  ### 質問

  タプル`T`を受け取り、そのタプルの長さを返す型`Length<T>`を実装します。

  例えば：

  ```ts
  type tesla = ['tesla', 'model 3', 'model X', 'model Y']
  type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

  type teslaLength = Length<tesla>  // expected 4
  type spaceXLength = Length<spaceX> // expected 5
  ```

  > GitHubで確認する：https://tsch.js.org/18/ja
  ヒント：
  https://typescriptbook.jp/reference/type-reuse/indexed-access-types
*/

// const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as constのとき、
// Tに入るのは値ではなく型なので、teslaはLength<typeof tesla>として使う必要がある
// 今まではオブジェクトの型だったので、 = {}　だったが今回は直接型を返す
type Length<T extends readonly any[]> = T["length"]

// indexed access typesを使っている。やっていることは以下と同じ
// ①オブジェクト型["プロパティ名"];
type A = { foo: number };
type Foo = A["foo"];

// ②配列型[number]; ※numberになにか数字をいれてつかうわけではない。numberときたときは配列の一要素の型を扱っていると考える
type StringArray = string[];
type T = StringArray[number]; // number番目の要素の型を参照する
// const strArr = ["a", "b"]
const method = (arr: StringArray): T => {
  return arr[0]
}

// ③　①の応用で、オブジェクトが必ずもつプロパティを参照する
const method2 = (arr: StringArray): StringArray["length"] => {
  return arr.length
}

type Foo = { a: number; b: string; c: boolean };
type T = Foo[keyof Foo];

/* _____________ 発展 typeof、keyofとの併用 _____________ */

const stateList = ["open", "closed"] as const;
type OpenCloseArrayType = typeof stateList;
type State = OpenCloseArrayType[number];

// State 型を使用した変数定義
const currentState: State = "open"; // OK
const nextState: State = "closed"; // OK

type Bar = { age: number; name: string; isSingle: boolean };
type KeyOfBar = keyof Bar
const keyOk: KeyOfBar = 'age'
// const keyNg: KeyOfBar = 'address' NG
type TypeOfOnePropatyInBaR = Bar[keyof Bar];
// 動くもののどういうタイミングで使うのか不明
const KidName: TypeOfOnePropatyInBaR = 'Taro'
// こっちのほうがいい気がする
type NameType = Bar["name"]
const KidNameBetter: NameType = 'Taro'
