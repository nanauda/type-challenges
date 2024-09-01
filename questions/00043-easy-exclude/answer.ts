/* ユニオン分配 (union distribution)とnever */

// Tにユニオン型(|)を使いたいときの注意:ユニオン分配https://typescriptbook.jp/reference/type-reuse/union-distribution#distributive-conditional-types
// ※extendsは<>の中だけで使えるわけではなく、T、Uの関係を示すときはどこでも使える
// 今回のキモは never型はそれ以外の型とのユニオン型をとると消える ところにある気が
type MyExclude<T, U> = T extends U ? never : T
