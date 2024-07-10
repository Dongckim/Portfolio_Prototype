---
emoji: 🍎
title: inout 입출력 파라미터, gaurd문, 옵셔널 바인딩
date: '2024-07-10 00:17:00'
author: Alex
tags: 블로그 github-pages gatsby
categories: iOS TIL 
---

기존 파이썬이나 자바스크립트 문법을 알고 있기 때문에, 비슷한 방식의 문법구조와 관련된 건 스킵하기로 했다. 다만 Swift에서 꼭 알아야만 하는 문법과 이 언어의 특징과 같은 문법들은 꼼꼼하게 되짚어보자.</br><i>(사실 이게 더 어려움;;)<i>

## 1. inout 입출력 파라미터

함수를 통해, 변수를 직접 수정하고 싶은 경우, 함수내의 파라미터는 기본적으로 복사되어 전달되는 값타입(str, string, Int...)이며, 임시상수이기 때문에 변경 불가가 원칙임. 

```swift
var num1 = 123
var num2 = 456

func swap(a: Int, b: Int){
  var c = a   //123

  a = b   // a = 456
  b = c   // b = 123
}
```

뭐 파이썬처럼 생각해보면 맞지 않을까? 라는 의문이 들 수 있는게 당연하다 (일단 나부터 개추;;)

실제로는 이 코드는 에러블록을 띄우는데, <strong>a</strong>와 <strong>b</strong>는 파라미터이기 때문에, 전역변수 scope에 있던 변수들이 복사되어 전달된다 (직접 쓰인다 정도로 이해하면 될 듯) 따라서, 원본이 전달되기 때문에 전역변수의 값이 변경되어서는 안되는 변경 불가가 원칙이다.

```swift
var num1 = 123
var num2 = 456

func swap(a: inout Int, b: inout Int){  //직접이 아닌, 주소값이 전달됨(참조)
  var temp = a

  a = b
  b = temp
}

swap(a: &num1, b:&num2) //함수를 실행하고자 할 때는 & 기호를 붙여서 생성해야함
```
이 예시를 보면 파라미터 앞에 inout 키워드를 쓰게되면, 이는 직접 전달 방식보단, 주소값 참조의 의미가 된다. 

내부적으로는, copy-in copy-out 매커니즘인데, 실제 원본이 전달된다고 생각하면 됨. 값을 복사해서 바디 내부로 전달하고, 함수가 종료될 때, 아규먼트로 전달한 변수에 복사됨 (함수 바디 내부에서 외부로 복사되어 전달)   
<br/>

**inout파라미터 사용시 주의해야할 점**
- 상수 let이나, 리터럴을 전달하는 것은 불가능
- 파라미터의 기본값 선언을 허용하지 않음
- 가변 파라미터나 여러개의 파라미터를 선언하여 사용하는 것도 불가능
<br/>
<br/>

## 2. guard문

If 문을 사용할 때 불편한 점? 바로 조건이 너무 많게 될 경우 코드 들여쓰기가 계속 될 수 있다는 것이다.<br/> → 가독성 매우 떨어지게 됨.

guard문을 사용하여 불만족하는 조건을 사전에 걸러낸다.
- else문을 먼저 배치, 먼저 조건을 판별하여 early-exit 가능하게 함.
- 조건을 만족하는 경우 코드가 다음 줄로 넘어가서 계속 실행됨.
- 가드문에서 선언된 변수는 아래문장에서 사용가능하다 (func 자체로는 같은 scope임) => 옵셔널 바인딩에서 더 알아보자.

```swift
  if true {   //서울에 거주하는 경우...
    if true {   //축구를 좋아하는 경우...
      if true {   //남자인 경우....
        if false{    //알파메일일 경우....
          .... 너무 난잡해짐
        }
      }
    }
  }
```
여러가지의 조건을 만족하는 유저를 구한다는 가정을 해보면, 코드가 상당히 들여써질 수 밖에 없다. else도 마찬가지일꺼고. 가드문은 이런 코드가독성을 굉장히 상승시켜줄만한 문법이라고 볼 수 있다.

```swift
func checkNumebrOf(password: String) -> Bool{
  guard password.count >=6 else {return false}

  guard 조건 else {return false}

  guard 조건 else {return false}
  ...
  return true
}
```
여전히 뭔 개소리인지 모르겠다면 밑에 예제를 보고 이해해보자

![github-blog-5.png](dog.png)
그냥 갑자기 한국축구가 생각나서 붙여봤다.

```swift
//if문
func usingIf() {
  var id: String? = nil
  if let str = id {
    if str.count > = 6 {
      print(str)
    }
  }
}
// 조건 2개인데 벌써 토나옴
```

```swift
//guard문
func usingGuard(){
  var id: String? = nil

  guard let str = id else {return}
  guard str.count >= 6 else {return}
}
//조건 2개인데 이 정도차이라면, 실무에선 어떻겠...
```
중요한건! 무조건 Return키워드를 통해서 무조건 scope를 탈출해야한다!
<br/>
<br/>

## 3. 옵셔널 바인딩

옵셔널 타입에 대해서는....(그냥 알아들었으면 끄덕여)

음..그래서 옵셔널 타입(임시타입)을 추출하는 방법에는 4가지가 있다.


<br/>


**궁금하신 점이 있다면 아래 `깃허브 로그인` 후 `댓글`로 남겨주세요!👇**

```toc

```
