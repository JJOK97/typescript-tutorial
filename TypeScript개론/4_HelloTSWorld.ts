/* 

    타입스크립트 설치 과정

    1. node 초기화
    
        npm init 

    2. TypeScript 설치

        npm i @types/node

    3. TypeScript Compiler 설치

        npm install typescript -g
        - 다른곳에서 활용하기 위해 글로벌로 설치

    4. TypeScript Compiler 버전 확인

        tsc -v

*/

console.log('Hello TypeScript');

const a: number = 1;

/* 
    
    js로 컴파일 시키기
    
    1. tsc TypeScript개론/4_HelloTsWorld.ts
    2. 4_HelloWorld.js 파일 생성됨
    3. node TypeScript개론/4_HelloTsWorld.js를 통해 console.log 출력

*/

// 위의 방식은 복잡하니까 한번에 실행할 수 있는 tsx를를 설치해보자
// npm i -g tsx
// tsx TypeScript개론/4_HelloTsWorld.ts
