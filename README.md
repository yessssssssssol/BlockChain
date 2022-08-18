## TypeScript를 활용한 프로젝트

### 1. 기본 설정

```ts
let a: number = 1;
let b: string = 'li';
let c: boolean = false;
let d: number[] = [1, 3, 4];
let e: undefined = undefined; //선택적 타입
let f: null = null;
let g = []; //type any로 설정되며 TypeScript의 보호를 빠져 나옴, 사용하지 않는 것이 좋음
```

### 2. 변수 설정 (Alias type)

##### 방법 1

```ts
type Player = {
  name: string;
  age: number;
  playerLevel?: number; //number||undefined
};

const nico: Player = {
  name: 'nico',
  age: 6,
};

if (nico.playerLevel && nico.playerLevel < 2) {
} //&&를 같이 사용해서 error 해결

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

### 3. readonly 설정

```ts
type Player = {
  readonly name: string;
  age?: number;
};

const playerMaker = (name: string): Player => ({ name });
const ys = playerMaker('ys');
ys.age = 12;
ys.name = 'nico'; //변경 불가 error
```

```ts
const numbers: readonly number[] = [1, 2, 3, 4];
numbers.push(1); //error
```

### 4. Tuple, readonly 설정

```ts
const player: readonly [string, number, boolean] = ['ys', 10, true];
player[0] = 1; //string이 아니기 때문에 error
player[0] = 'nico'; //readonly로 error
```

## 5. Unknown, Void

##### unknown 사용법

```ts
let a: unknown;

if (typeof a === 'number') {
  let b = a + 1;
}
if (typeof a === 'string') {
  let b = a.toUpperCase();
}
```

##### void 사용법

```ts
function hello(): void {
  console.log('x');
}
//void는 아무것도 return하지 않는 함수, :void는 보통 생략함, '비어있는 상황'
```
