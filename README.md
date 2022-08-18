# TypeScript를 활용한 프로젝트

## 1. Overview of TypeScript

### 1-1. 기초

```ts
let a: number = 1;
let b: string = 'li';
let c: boolean = false;
let d: number[] = [1, 3, 4];
let e: undefined = undefined; //선택적 타입
let f: null = null;
let g = []; //type any로 설정되며 TypeScript의 보호를 빠져 나옴, 사용하지 않는 것이 좋음
```

### 1-2. 변수 설정 (Alias type)

##### 방법 1

```ts
type Player = {
  name: string;
  age: number;
  playerLevel?: number; //number|undefined
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

### 1-3. readonly 설정

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

### 1-4. Tuple & readonly 설정

```ts
const player: readonly [string, number, boolean] = ['ys', 10, true];
player[0] = 1; //string이 아니기 때문에 error
player[0] = 'nico'; //readonly로 error
```

### 1-5. Unknown, Void, Never

void, unknown, never 순으로 사용 됨(never은 거의 사용 안 함)

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
//void는 아무것도 return하지 않는 함수, :void는 보통 생략함, '비어있는 것'
```

##### never 사용법

```ts
function hi(name: string | number) {
  if (typeof name === 'string') {
    name; //string
  } else if (typeof name === 'number') {
    name; //number
  } else {
    name; //never 하지만, string|number로 타입을 정했기 때문에 올바른 코드가 들어오면 절대 실행되지 않음
  }
}
```

---

## 2. Functions

### 2-1. Call Signatures

```ts
type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;
```

### 2-2. Overloading

함수가 여러개의 call signatures를 가지고 있을 때 발생

```ts
type Add = {
  (a: number, b: number): number;
  (a: number, b: string): number; //b = number|string
};

const add: Add = (a, b) => {
  if (typeof b === 'string') return a;
  return a + b;
};
```

```ts
type Config = {
  path: string;
  state: object;
};
type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === 'string') {
    console.log(config);
  } else {
    console.log(config.path);
  }
};
```

```ts
type Add = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number; //c는 option
};

const add: Add = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

add(1, 2); //3
add(1, 2, 3); //6
```

### 2-3. 다형성(Polymorphism)

- 여러 타입의 결과가 배열로 나오는 경우 사용
- TypePlaceholder은 보통 T or V로 사용

```ts
type SuperPrint = {
  <T>(arr: T[]): T; //
};
```

```ts
type SuperPrint = {
  <TypePlaceholder>(arr: TypePlaceholder[]): void; //
};

const superPrint: SuperPrint = (arr) => {
  arr.forEach((i) => console.log(i));
};

superPrint([1, 2, 3, 4]);
superPrint([true, false]);
superPrint(['1']);
superPrint(['hi', 1, false]);
```

```ts
type SuperPrint = {
  <TypePlaceholder>(arr: TypePlaceholder[]): TypePlaceholder;
};

const superPrint: SuperPrint = (arr) => arr[0];

const a = superPrint([1, 2, 3, 4]); //number
const b = superPrint([true, false]); //boolean
const c = superPrint(['1']); //string
const d = superPrint(['hi', 1, false]); //string|number|boolean
```
