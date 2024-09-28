---
emoji: 🥽
title: OpenGL ES 3차원 컴퓨터그래픽스 레스터라이저
date: '2024-09-29 10:27:00'
author: ALEX
tags: Research OpenGL
categories: OpenGL
---

ⓒ 2019. [JungHyun Han](https://media.korea.ac.kr/people/jhan/) Korea University Seoul, All rights reserved.

<br/>


## Rasterizer

앞서 배운 vertex shader를 통해 삼각형이 그려질 것이고, 삼각형이 화면에 나타나면서 픽셀을 점유하게 될 것이다.
- 픽셀마다 필요한 색깔과 같은 데이터를 대입시켜주어야 한다.

1. Clipping
2. Perspective
3. Back-face culling
4. Viewport Transform
5. Scan conversion

<br/>


```toc
```