//1번 (이름 출력
function greet() {
 console.log("안녕 내 이름은 제시카야")
}

//2번 (다양한 이름 출력
function greet(name) {
 console.log("안녕 내 이름은 " + name + "야")
}
greet("에밀리")

//3번 (다양한 이름 출력 +반환
function greet(name) {
 console.log("안녕 내 이름은 " + name + "야")
return name
}
const name = greet("지영")
console.log("안녕 내 이름은 " + name + "야")

//4번 (입력받은 년 월 일 출력
function meetAt(year,month,day) {
let todayYear = year;
 let todayMonth = month;
 let todayDate = date;
  
 if(todayYear) {
   return `${todayYear}/${todayMonth}/${todayDate}`;
 }
}

//5번 (가장 작은 값 출력
function findSmallestElement(arr) {
 let result = arr[0];
 if (arr.length === 0) {
   return 0;
 }
 for (let i = 1; i < arr.length; i++) {
   if (result > arr[i]) {
     result = arr[i];
   }
 }
 return result;
}

//6번 (지폐와 동전의 최소 개수 게산 함수
let smallestNumber = findSmallestElement([100, 200, 3, 0, 2, 1])
console.log(smallestNumber)

let unit = [50000, 10000, 5000, 1000, 500, 100]
function MoneyCount(money) {
 for (let i = 0; i < unit.length; i++) {
   let num = Math.floor(money / unit[i])
   console.log(unit[i] + "X" + num)
   money = money - (unit[i] * num)
 }
}

MoneyCount(12300)