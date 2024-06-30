// extends keyof - 型引数の制約
// key in K - Mapped Types
type MyPick<T, K extends keyof T> = {
  [key in K]: T[key]
}
