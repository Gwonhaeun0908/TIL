//if문

let age = 21
let licence = false

if (age >= 18 && age < 20) {
  console.log("오토바이 운전만 가능합다.")
} else if (age > 20) {
  console.log("운전이 가능합니다.")
} else {
  console.log("운전이 불가능합니다.")
}

if (age > 20) {
  if (licence == true) {
    console.log("운전이 가능합니다.")
  } else {
    console.log("면허를 취득해야합니다.")
  }
} else {
  console.log("운전이 불가능합니다.")
}

//문제 1 (유저가 입력하는 숫자가 0인지 음성인지 양성인지 판단하는 프로그램을 만드시오.

let num = 1

if (num === 0) {
  console.log("0 입니다.")
} else if (num > 0) {
  console.log("양성입니다.")
} else {
  console.log("음성입니다.")
}

//문제 2 (레포트 점수에따라 등급을 매기는 프로그램을 만드시오.

let score = 70

if (score <= 100 && score >= 90) {
  console.log("A")
} else if (score <= 89 && score >= 80) {
  console.log("B")
} else if (score <= 79 && score >= 70) {
  console.log("C")
} else if (score <= 69 && score >= 60) {
  console.log("D")
} else {
  console.log("F")
}

//문제 3 (Javascript와 React 둘다 할줄 안다면 "합격!" Javascript와 React 둘중 하나만 할줄 안다면 "예비", 두 스킬이 없다면 "탈락"을 보여주는 프로그램을 짜시오.

let skills = ["HTML", "CSS", "Javascript", "React"]

if (skills.includes ("Javascript") && skills.includes ("React")) {
  console.log("합격")
} else if (skills.includes("Javascript") || skills.includes ("React")) {
  console.log("예비")
} else {
  console.log("탈락")
}