fn reverse(pair: (i32, bool)) -> (bool, i32) {
    // `let` can be used to bind the members of a tuple to variables
    // `let`でタプルの中の値を別の変数に束縛することができる。
    let (integer, boolean) = pair;

    (boolean, integer)
}

// The following struct is for the activity.
// 以下の構造体は後ほど「演習」で用いる。
#[derive(Debug)]
struct Matrix(f32, f32, f32, f32);

fn main() {
    // Variables can be type annotated.
    // 変数に型を指定
    let logical: bool = true;

    let a_float: f64 = 1.0; // Regular annotation
                            // 通常の型指定
    let an_integer = 5i32; // Suffix annotation
                           // サフィックスによる型指定

    // Or a default will be used.
    // サフィックスを指定しない場合、デフォルトを選択
    let default_float = 3.0; // `f64`
    let default_integer = 7; // `i32`

    // A type can also be inferred from context
    let mut inferred_type = 12; // Type i64 is inferred from another line
    inferred_type = 4294967296i64;

    // A mutable variable's value can be changed.
    let mut mutable = 12; // Mutable `i32`
                          // ミュータブルな `i32`.
    mutable = 21;

    // Error! The type of a variable can't be changed.
    // エラー！ ミュータブルな変数でも型は不変
    // mutable = true;
    // Variables can be overwritten with shadowing.
    let mutable = true;

    // Integer addition
    // 整数の足し算
    println!("1 + 2 = {}", 1u32 + 2);

    // Integer subtraction
    // 整数の引き算
    println!("1 - 2 = {}", 1i32 - 2);
    // TODO ^ Try changing `1i32` to `1u32` to see why the type is important
    // TODO ^ 型が重要であることを実感するため`1i32`を`1u32`に変更してみましょう。

    // Short-circuiting boolean logic
    // 単純な論理演算子
    println!("true AND false is {}", true && false);
    println!("true OR false is {}", true || false);
    println!("NOT true is {}", !true);

    // Bitwise operations
    // ビットワイズ演算
    println!("0011 AND 0101 is {:04b}", 0b0011u32 & 0b0101);
    println!("0011 OR 0101 is {:04b}", 0b0011u32 | 0b0101);
    println!("0011 XOR 0101 is {:04b}", 0b0011u32 ^ 0b0101);
    println!("1 << 5 is {}", 1u32 << 5);
    println!("0x80 >> 2 is 0x{:x}", 0x80u32 >> 2);

    // Use underscores to improve readability!
    // 可読性のための`_`（アンダースコア）の使用
    println!("One million is written as {}", 1_000_000u32);

    // A tuple with a bunch of different types
    // 様々な型を値に持つタプル
    let long_tuple = (
        1u8, 2u16, 3u32, 4u64, -1i8, -2i16, -3i32, -4i64, 0.1f32, 0.2f64, 'a', true,
    );

    // Values can be extracted from the tuple using tuple indexing
    // インデックスを用いて、タプル内の要素を参照できる。
    println!("long tuple first value: {}", long_tuple.0);
    println!("long tuple second value: {}", long_tuple.1);

    // Tuples can be tuple members
    // タプルはタプルのメンバになれる
    let tuple_of_tuples = ((1u8, 2u16, 2u32), (4u64, -1i8), -2i16);

    // Tuples are printable
    // タプルはプリント可能である。
    println!("tuple of tuples: {:?}", tuple_of_tuples);

    // But long Tuples cannot be printed
    // let too_long_tuple = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13);
    // println!("too long tuple: {:?}", too_long_tuple);
    // TODO ^ Uncomment the above 2 lines to see the compiler error

    let pair = (1, true);
    println!("pair is {:?}", pair);

    println!("the reversed pair is {:?}", reverse(pair));

    // To create one element tuples, the comma is required to tell them apart
    // from a literal surrounded by parentheses
    // 要素を1つしか持たないタプルを作成する場合、括弧で囲まれたただのリテラル
    // と区別するため、カンマが必要になる。
    println!("one element tuple: {:?}", (5u32,));
    println!("just an integer: {:?}", (5u32));

    //tuples can be destructured to create bindings
    //タプルを分解して別の変数にそれぞれの値を代入
    let tuple = (1, "hello", 4.5, true);

    let (a, b, c, d) = tuple;
    println!("{:?}, {:?}, {:?}, {:?}", a, b, c, d);

    let matrix = Matrix(1.1, 1.2, 2.1, 2.2);
    println!("{:?}", matrix);
}
