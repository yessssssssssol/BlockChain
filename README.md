## TypeScript를 활용한 프로젝트

### 1. 기본 설정

```ts
let a: number = 1;
let b: string = 'li';
let c: boolean = false;
let d: number[] = [1, 3, 4];
```

### 2. 변수 설정 (Alias type)

##### 방법 1

```ts
type Player = {
  name: string;
  age: number;
  playerLevel?: number;
};

const nico: Player = {
  name: 'nico',
  age: 6,
};

if (nico.playerLevel && nico.playerLevel < 2) {
} //&&를 같이 사용해야 함

const ys: Player = {
  name: 'ys',
  age: 9,
};
```

##### 방법 2

```ts
type Name = string;
type Player = {
  name: Name;
  age?: number;
};

function playerMaker(name: string): Player {
  return {
    name,
  };
}

const jack = playerMaker('jack');
jack.age = 12;
```

##### 방법 3

```ts
type Player = {
  name: string;
  age?: number;
};

const playerMaker = (name: string): Player => ({ name });
const jack = playerMaker('jack');
jack.age = 12;
```
