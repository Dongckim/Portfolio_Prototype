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





