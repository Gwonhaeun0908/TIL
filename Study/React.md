# React

### 프론트엔드 라이브러리란?
여러가지의 **라이브러리**와 **프레임위크**: Angular, Ember, Backbone, Vue, React…
3대장: Angular, Vue, React


### React가 특별한 이유
-   어마어마한 생태계
-   Virtual DOM 사용
-   사용하는 곳이 많다


### JSX 기본 문법
-   태그는 꼭 닫혀 있어야 한다.
```jsx
<div>
	<input type="text"/> //셀프 클로징 태그
</div>
```

-   두개 이상의 엘리먼트는 무조건 하나의 엘리먼트로 감싸져있어야 한다.
```jsx
<div> //이 <div>태그가 하나로 묶어줌
	<div>Hello</div>
	<div>Bye</div>
</div>

--> import React, { Component, Fragment } from 'react'; //16.2에서 추가된 기능
<Fragment> //import에 Fragment을 추가하면 굳이 또 다른 <div>태그 없이 가능
	<div>Hello</div>
	<div>Bye</div>
</Fragment>
```

-   JSX 내부에서 자바스크립트 값 사용하기
```jsx
const name = 'react'; //Hello react!가 출력됨
return (
	<div>
		hello{name}!
	</div>
) 
```

-   조건부 랜더링(삼항연산자 이용)
```jsx
const name = 'react'; 
return (
	<div>
		{
			1 + 1 === 2 //조건식
				?(<div>맞아요!</div>) //ture일때
				:(<div>틀려요!</div>) //false일때
		}
	</div>
); //다른 방식 함수나 => 화살표 함수로도 가능
```

-   CSS 적용법
```jsx
const style = { //style 적용방법
	backgroundColor: 'black', //기본 css에서 '-'가 들어간 코드는 대문자로 바꿔준다.
	padding: '16px',
	color: 'white',
	fontSize: '36px'
};
return (
	<div style = {style}> //호출할때 중괄호로 감싸주기
		안녕하세요!
	</div>
);
```

```jsx
import React, { component } from 'react'; //class 태그로 적용하는 법 
import './App.css';

class App....
	render() {
		return (
			<div className = "App"> //단 class 대신 className사용
				안녕하세요!
			</div>
	);
}

```

-   주석 처리 방법 (return안에 주석을 작성하면 그대로 출력됨)
```jsx
class App....
	render() {
		return (
			<div>
				{/* 멀티라인으로 써야된다.*/} //중괄호로 묶어서 써야한다.
				<h1>리액트</h1>
			</div>
	);
}
```


### Props
부모 컴포넌트를 자식 컴포넌트에게 전달할때 사용한다.
`<Child value = “value” />` 여기서 **value**가 하나의 **props**이다.

-   컴포넌트 만들어서 Props 전달하기
```jsx
import React, { Component } from "react"; //만든 MYName.js

class MyName extends Component {

    static defaultProps = { //만약 nmae에 값이 주어지지 않았다면 props가 안들어 갈때
        name: "user name"   //기본값 설정하기 static을 사용하는게 최신문법
    }

    render() {
        return (
            <div>
                안녕하세요. 제 이름은 <b>{this.props.name}</b>입니다.
            </div>
        )
    }
}

MyName.defaultPropws = { //이것또한 가능 class하단에서
    name: "user name"
};

export default MyName;
```

```jsx
import React, { Component } from 'react'; //App.js
import MyName from './MyName'; //컴포넌트 연결

class App extends Component {
  render() {
    return <MyName name = "React"/>; // MyName에 있는 name값
  } //안녕하세요. 제 이름은 React입니다. 출력
}

export default App;
```

-   컴포넌트를 함수를 이용해서 만들기
```jsx
import React from 'react'; //더 이상 Component를 불러오지 않아도 된다.

const NyName = ({ name }) => {
  render() {
    return(
			<div>
				안녕하세요. 제 이름은 {name}입니다.
			</div>
		)
  };
	
MyName.defaultPropws = { //기본값 설정
    name: "user name"
};

}

export default MyName;
```