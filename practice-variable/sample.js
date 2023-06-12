// var nickname = "taro"
// console.log(nickname)
// nickname = "jiro"
// console.log(nickname)

// function foo () {
//     let x = "webcamp"
//     {
//         let y = "hello webcamp"
//     }
//     console.log(x)
//     console.log(y)
// }

// foo()

// for (let i = 0; i < 10; i++) {     
//     console.log(i) 
//   }
  
//   console.log(i)

// 変数の巻き上げ(ホイルスティング)注意
var str = "webcamp"

function foo() {
    console.log(str)
    var str = "dmm webcamp"
    console.log(str)
}

foo()
// varはあまり使われない
// letは再代入が可能、constは再代入が不可能。
// letを使っていると、どこかで値が変わってないかをチェックする際、全てのコードを確認する必要が出てくる。
