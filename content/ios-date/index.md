---
emoji: 🍎
title: iOS스터디 week7, 스위프트에서 날짜와 시간 다루기
date: '2024-08-23 22:45:00'
author: ALEX
tags: study date
categories: iOS TIL
---

## UTC(Cordinated Universal Time)

협정 세계시라고 하는 단위인데, 국제적인 표준시간의 기준이라고 한다.
- 국제 사회가 사용하는 과학적 시간의 표준
- 기존 평균태양시인 그리니치 표준시(GMT)를 대체하여 사용 (영국 그리니치 천문대 시간 기준.)
- 우리나라(한국)는 런던을 기준으로 + 9시간 (빠름)

## Date 구조체의 이해

스위프트에서 기본으로 제공해주는 날짜를 다루는 Date구조체 타입

```swift
let now = Date()
// 생성시점의 날짜와 시간을 생성해서 (기준 시간으로부터) 초단위 기준값을 가지고 있음.
print(now)
// 그냥 출력하면 항상 UTC기준의 시간으로 출력
```

### 초, 분, 시간
- 60초(1분) * 60분(1시간) * 24시간 = 하루를 초기준으로
1. 3600초
2. 3600초 * 24 = 86,400초 (하루)

```swift
let yesterday = now - 86400
print(yesterday)

now.timeIntervalSince(yesterday)    // 해당 시점으로부터 차이를 초로 (86,400초 차이)
now.distance(to: yesterday)         // 지금시점을 기준으로 그 시간까지의 거리를 초로
yesterday.distance(to: now)

now.advanced(by: 86400)             // 내일
now.addingTimeInterval(3600 * 24)
now + 86400
```

### 정의된 타임존
```swift
for localeName in TimeZone.knownTimeZoneIdentifiers{
    print(localeName)
}
timeZone.current
```

## 날짜와 시간 다루기
Date/Calender/DateFormatter

- 날짜를 제대로 다루려면?
1. 달력을 다루는 calendar 구조체의 도움도 필요 (양력, 음력인지)
2. 문자열로 변형해주는 DateFormatter 클래스의 도움도 필요

*기본적으로 지역설정/타임존의 영향이 있음.*

<Br/>

### Calendar 구조체의 이해 
- 스위프트에서 기본으로 제공해주는, 달력(Calendar) 구조체 타입
- "절대 시점(Date)"을 연대/연도/날짜/요일과 같은 "달력의 요소"로 변환을 돕는 객체
- 그레고리력 (Gregorian calendar) - 양력(전세계표준 달력)

```swift
var calendar = Calendar.current

let calendar1 = Calendar(identifier: .gregorian)    // 직접 생성하기 (이런 방식으로 잘 사용하지는 않음)
let calendar2 = Calendar.autoupdatingCurrent        // 유저가 선택한 달력 기준(세계적 서비스를 한다면)
```
<br/>

**지역설정 → 나라(지역)마다 날짜와 시간을 표시하는 형식과 언어가 다름**
```swift
calendar.locale     // 달력의 지역(영어/한국어)
calendar.timeZone   // 타임존 ==> Asia/Seoul (UTC 시간관련 개념)


//필요할 때 찾아서 사용하면 됨.
calendar.locale = locale(identifier: "ko KR")
```

### Date의 "년/월/일/시/분/초"를 확인하는 방법

1. 날짜 - 년/월/일
```swift
let now = Date()

let year: Int = calendar.component(.year, from: now)
//메서드 불러와서 .찍어보면 관련 항목 들을 볼 수 있다.

```
2. Date는 Calendar(양력)의 도움을 받아야 여러가지로 활용가능

3. 하나의 요소가 아닌 여러개의 데이터를 얻는 방법 (Date Component)
```swift
let myCal = Calendar.current

var myDateCom = myCal.dateComponents([.year, .month, .day], from: now)

myDateCom.year
myDateCom.month
myDateCome.day

```

### 열거형으로 요일을 만들고, 오늘의 요일을 계산하기.

```swift
enum Weekday:Int {
    case sunday = 1, monday, tuesday, wednesday, thursday, friday, saturday

    static var today: Weekday {
        let weekday = Calendar.current.component(.weekday, from: Date())    // 요일을 나타내는 정수
        return Weekday(rawValue: weekday)!
    }
}

let today = Weekday.today
```

### 두 날짜 사이의 일수 계산하기

```swift
let startDate = Date()
let endDate = startDate.addingTimeInterval(3600 * 24 * 60)

let calendar2 = Calendar.current
let someDays = calendar2.dateComponents([.day], from: startDate, to: endDate).day!

print("\(someDays) 일 후")
```

<br/>

## DateFormatter → 표시를 하기 위한 문자열

날짜와 시간을 원하는 형식의 문자열(String)으로 변환하는 방법을 제공하는 클래스
RFC 3339 표준으로 작성 (스위프트가 아닌 다른 표준을 사용)

> Date를 특정형식의 문자열로 변환하려면 → (1)지역설정 + (2)시간대설정 + (3)날짜형식 + (4)시간형식

```swift
let formatter = DateFormatter()

// 지역 및 시간대 설정

// 나라, 지역마다 날짜와 시간을 표시하는 형식과 언어가 다름
formatter.locale = Locale(identifier: "ko_KR")
// "2021년 5월 8월 토요일 오후 11시 44분 24초 대한민국 표준시

formatter.locale = Locale(identifier: "en_US")
// "Saturday, May 8 2021 at 11:45:51 PM Korean Standard Time"

formatter.timeZone = TimeZone(identifier: String)
// 시간대 설정

// (1) 에플이 미리 만들어 놓은 기존 형식으로 생성
formatter.dateStyle = .full     // "Tuesday, April 13 2021"
formatter.dateStyle = .long     // "April 13 2021"
formatter.dateStyle = .medium   // "Apr 13 2021"
formatter.dateStyle = .none     // 날짜 없어짐
formatter.dateStyle = .short    // "2:55 PM"

//(2) 커스텀형식으로 설정 가능
formatter.dateFormat = "yyyy/MM/dd"

let someString2 = formatter.string(from: Date())
print(someString2)

```

## 실제 프로젝트 예시

```swift
struct InstagramPost {
    let title: String = "제목"
    let description: String = "내용설명"
    
    private let date: Date = Date()     //게시글 생성을 현재날짜로

    var dateString: String {
        get {
            let formatter = DateFormatter()
            formatter.locale = Locale(identifier: "ko_KR")

            //애플이 만들어 놓은 
            formatter.dateStyle = .medium 
            formatter.timeStyle = .full

            return formatter.string(from: data)
        }

    }

}


let post1 = InstagramPost()
print(post1.dateString)

let post2 = InstagramPost()
print(post2.dateString)
```



```toc

```