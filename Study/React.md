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

**함수형** 컴포넌트와 **class형** 컴포넌트의 차이점

-   class형에는 **State**와 **LifeCycle**이라는 기능이 있다.
-   함수형은 미세하게 마운틴 속도가 더 빠르고 불필요한 기능이 없다.

---

### State
state는 내부에서 변경할 수 있다. 변경 할 때는 언제나 **setState라는 함수를 사용**한다.

```JSX
class Counter extends Component {

  state = {
    number: 0
  };

  handleIncrease = () => {
    this.setState({  //setState함수
      number: this.state.number + 1
    });
  };

  handleDecrease = () => {
    this.setState({
      number: this.state.number - 1
    });
  };

  render() {
    return (
      <div>
        <h1>카운터</h1>
        <div>값: {this.state.number}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}
```

---

### LifeCycle API

![[Pasted image 20221025172636.png]]

1.  **Mounting:** 컴포넌트가 브라우저에 나타날때
    -   **constructor:** 가장 먼저 실행되는 함수이며 컴포넌트 State 초기설정할때
		```JSX
		constructor(props) {
			super(props);
		}
		```
    -   **getDerivedStateFromProps:** 컴포넌트 Props값을 State에 동기화 할때
        ```jsx
        static getDerivedStateFromProps(nextProps, preState) {
        	// 여기서는 setState를 하는 것이 아니라 특정 props가 바뀔 때 설정하고 싶은
        	// state 값을 리턴하는 형태로 사용됩니다.
        }
        ```  
    -   **componentDidMount**
        ```jsx
        componentDidMount() {
        	// 외부 라이브러리 연동: D3, masonry, etc..
        	// 컴포넌트에서 필요한 데이터 요청: Ajax, GraphQL, etc..
        	// DOM에 관련된 작업: 스크롤 설정, 크기 읽어오기 등..
        }
        ```
        
2.  **Updating:** 컴포넌트에 Props가 바귀거나 State가 바뀔때
    -   **shouldComponentUpdate:** 컴포넌트가 업데이트 될때 성능을 최적화 시키고 싶을때  
        ```jsx
        shouldComponentUpdate(nextProps, nextState) {
        	// return false하면 업데이트를 안함
        	// return this.props.checked !== nextProps.checked
        	return true;
        }
        ```
    -   **getSnapshotBeforeUpdate:** DOM에 변화가 일어나기 직전의 DOM의 상태를 가져온다
        1.  render()
        2.  getSnapshotBerforeUpdate()
        3.  실제 DOM에 변화 발생
        4.  componentDidUpdate
        ```jsx
        getSnapshotBeforeUpdate(prevProps, prevState) {
        	// DOM 업데이트가 일어나기 직전의 시점이다.
        	// 새 데이터가 상단에 추가되어도 스크롤바를 유지한다.
        	// scrollHeight는 전 후를 비교해서 스크롤 위치를 설정하기 위함이다.
        	// scrollTop은, 이 기능이 크롬에 이미 구현이 되어있는데,
        	// 이미 구현이 되어있다면 처리하지 않도록 하기 위함이다.
        
        	if(preState.array !== this.state.array) {
        		const {
        			scrollTop, scrollHeight
        		} = this.list;
        
        		// 여기서 반환하는 값은 componentDidMount에서 snapshot 값으로 받아올 수 있다.
        		return {
        			scrollTop, scrollHeight
        		};
        	}
        }
        
        componentDidUpdate(preProps, preState, snapshot) {
        	if(snapshot) {
        		const { scrollTop } = this.list;
        		if(scrollTop !== snapshot.scrollTop) return;  // 기능이 이미 구현되어있다면 처리하지 않는다.
        		const diff = this.list.scrollHeight - snapshot.scrollHeight;
        		this.list.scrollTop += diff;
        	}
        }
        ```        
    -   **componentDidUpdate:** 컴포넌트가 업데이트었을때 실행되며 State가 바뀌었을때 
        ```jsx
        componentDidUpdate(prevProps, prevState, snapshot) {
        	// render()를 호출하고난 다음에 발생
        	// 이 시점에선 props와 state가 바뀌어있다.
        	// 파라미터를 통해 이전의 값인 prevProps와 prevState를 조회 할 수 있다.
        }
        ```
        
3.  **Unmounting:** 컴포넌트가 브라우저에 사라질때
    -   **componentWillUnmount:** 설정한 이벤트들을 없애주는 작업 
        ```jsx
        componentWillUnmount() {
        	// 이벤트, setTimout, 외부 라이브러리 인스턴스 제거
        }
        ```
        
4.  **컴포넌트에 에러 발생**
    -   **componentDidCatch**
        ```jsx
        componentDidCatch(error, info) {
        	this.setState({
        		error: true
        	});
        }
        ```

### LifeCycle 총 코드
```JSX

	// App.js
	import React, { Component } from "react";
	import MyComponent from "./MyComponent";

	class App extends Component {
	  state = {
	    counter: 1,
	    error: false
	  }
	
	  componentDidCatch(error, info) {
	    this.setState({
	      error: true,
	    });
	    // API를 통해서 서버로 오류 내용 날리기
	  }
	
	  constructor(props) {
	    super(props);
	    console.log('constructor');
	  }
	
	  componentDidMount() {
	    console.log('componentDidMount');
	  }
	
	  handleClink = () => {
	    this.setState({
	      counter: this.state.counter + 1
	    });
	  }
	
	  render() {
	    if(this.state.error) {
	      return(
	        <div>에러가 났어요</div>
	      )
	    }
	    return(
	      <div>
	        {this.state.counter < 10 && <MyComponent value ={this.state.counter}/>}
	        <button onClick={this.handleClink}>Clink Me</button>
	      </div>
	    );
	  }
	}
	
	export default App;
	
	
	// MyComponent.js
	import React, { Component } from 'react';
	
	class MyComponent extends Component {
	    state = {
	        value: 0
	    }
	
	static getDerivedStateFromProps(nextProps, prevState) {
	    if(prevState.value !== nextProps.value) {
	        return{
	            value: nextProps.value
	        };
	    }
	    return null;
	}
	
	shouldComponentUpdate(nextProps, nextState) {
	    if(nextProps.value === 10)  return false;
	    return true;
	}
	
	componentDidUpdate(prevProps, prevState) {
	    if(this.props.value !== prevProps.value) {
	        console.log('value 값이 바뀌었다!', this.props.value);
	    }
	}
	
	componentWillUnmount() {
	    console.log('Good Bye');
	}
	
	    render() {
	        return(
	            <div>
	                {this.props.missing.something}
	                <p>props: {this.props.value}</p>
	                <p>state: {this.state.value}</p>
	            </div>
	        )
	    }
	}
	
	export default MyComponent;
```

**참고 문서: [](https://react-anyone.vlpt.us/05.html)[https://react-anyone.vlpt.us/05.html](https://react-anyone.vlpt.us/05.html)**

필요한 도구 설치 방법, Create react app 사용하기

### Input 상태 관리하기

```jsx
// PhoneForm.js
import React, { Component } from 'react'

class PhoneForm extends Component {

    state = {
        name: '',
        phone: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value // target == input
        });
    }

  render() {
    return (
        <form>
            <input 
                name='name'
                placeholder='이름' 
                onChange={this.handleChange} 
                value={this.state.name}
            />
            <input 
                name='phone'
                placeholder='전화번호' 
                onChange={this.handleChange}
                value={this.state.phone} 
            />
            <div>
                {this.state.name} {this.state.phone}
            </div>
        </form>
    );
  }
}

export default PhoneForm;
```

### 배열에 데이터 삽입하기
```JSX
	//App.js
	import React, { Component } from 'react'
	import PhoneForm from './components/PhoneForm';
	
	class App extends Component {
	
	  id = 0;
	
	  state = {
	    information: [],
	  }
	
	  handleCreate = (data) => {
	    const { information } = this.state;
	    this.setState({
	      information: information.concat(data) ({
	        ...data,
	        id: this.id++
	      /* information: information.concat(data) ({
	          name: data.name,
	          phone: data.phone
	          id: this.id++
	        })*/
	
	      /* information: information.concat(Object.assign({}, data, {
	          id: this.id++
	        }))*/
	      })
	    });
	  }
	
	  render() {
	    return (
	      <div>
	        <PhoneForm onCreate={this.handleCreate} />
	        {JSON.stringify(this.state.information)}
	      </div>
	    );
	  }
	}
	
	export default App;
	
	
	//PhoneForm.js
	import React, { Component } from 'react'
	
	class PhoneForm extends Component {
	
	    state = {
	        name: '',
	        phone: '',
	    }
	
	    handleChange = (e) => {
	        this.setState({
	            [e.target.name]: e.target.value // target == input
	        });
	    }
	
	    handleSubmit = (e) => {
	        e.preventDefault();
	        this.props.onCreate(this.state);
	        this.setState({
	            name: '',
	            phone: '',
	        })
	    }
	
	  render() {
	    return (
	        <form onSubmit={this.handleSubmit}>
	            <input 
	                name='name'
	                placeholder='이름' 
	                onChange={this.handleChange} 
	                value={this.state.name}
	            />
	            <input 
	                name='phone'
	                placeholder='전화번호' 
	                onChange={this.handleChange}
	                value={this.state.phone} 
	            />
	            <button type='submit'>등록</button>
	        </form>
	    );
	  }
	}
	
	export default PhoneForm;

```
