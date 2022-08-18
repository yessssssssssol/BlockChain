## TypeScript를 활용한 프로젝트

### 1. 기본 문법 적용하기

```ts
let a: number = 1;
let b: string = 'li';
let c: boolean = false;
let d: number[] = [1, 3, 4];
```

### 2. 함수형 문법

```ts
type Player = {
  name: string;
  age: number;
  playerLevel?: number;
};

const player: Player = {
  name: 'nico',
  age: 6,
};

if (player.playerLevel && player.playerLevel < 2) {
}

const playerYS: Player = {
  name: 'YS',
  age: 9,
};
```
