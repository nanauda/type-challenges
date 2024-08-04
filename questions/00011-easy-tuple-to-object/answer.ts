// ※ T extends readonly any[] は、 T はany[](読み取り専用)形であることを表す
// numberは予約語で、以下のようにも使うことができる。「ある数字」みたいな意味?「インデックス型クエリ (Index Types)」
type TupleToObject<T extends readonly any[]> = {
  [K in T[number]]: K
}

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;
type Elements = typeof tuple[number]; // 'tesla' | 'model 3' | 'model X' | 'model Y'
