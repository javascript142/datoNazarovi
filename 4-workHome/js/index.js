// //შექმენით პროგრამა, რომელიც ნებისმიერი 10 ელემენტისგან შემდგარი მასივიდან გამოიტანს ყოველ მესამე ელემენტს ეკრანზე. შეასრულეთ ეს დავალება ციკლების მეშვეობით.
// let num = 0;
// while (num < 10){
//     num = num + 1;
//     if (num % 2 !== 0){
//         console.log(num);
//     }
    
//  } 
// // შექმენით, პროგრამა, რომელიც 10-დან 1-მდე რიცხვებს გამოიტანს. მაგ. 10,9,8,7,6,5,4,3,2,1, შეასრულეთ ეს დავალება ციკლების მეშვეობით.
let num2 = 10 ;

for (let count = 0; count > num2; count++) {
    if(count % 2 == 0) {
        console.log(num2[count]);      
    }else if (count % 2 !== 0) {
      console.log(num2[count]);
    }
} // /// ar muchobs 


// // მოცემული მასივიდანlet names = ['Bob', 'John', 'Bob', 'Nick', 'Bob', 'Mary','bob', 'Sue','Bob' , 'ann'] ამოიღეთ 'Bob' სახელი ყველგან სადაც ის შეგხვდებათ და დაბრუნეთ მასივი 'Bob'-სახელის გარეშე. შედეგი ესეთი უნდა იყოს: ['John', 'Nick', 'Mary', 'Sue', 'Ann'] შეასრულეთ ეს დავალება ციკლების მეშვეობით, ასევე კარგი იქნება თუ იგივე დავალებას ციკლური ოპერაციების გამოყენების გარეშეც შეასრულებთ.


let names = ['Bob', 'John', 'Bob', 'Nick', 'Bob', 'Mary','bob', 'Sue','Bob' , 'ann'];
let classA = [];
let classB = [];
let num = 0;
while (names.length > num) {
   if (num % 2 == 1 ){
    classA.push(names[num])
} else if (num % 2  !== 0 ) {
    classB.push(names[num])
}
 num = num + 1 ;
}
console.log(classA)
console.log(classB)
// // შექმენით ფუნქცია, რომელიც სტრიქონის პირველ ასობგერის კაპიტალიზირებას მოახდენს მაგ. javascript => უნდა გახდეს: Javascript, ანუ J დიდი ასობგერით უნდა ეწეროს.
let js = "javascript"

console.log(js.slice(0,1).toUpperCase().concat("avascript"))
// console.log(js.toLowerCase())

// // შექმენით ფუნქცია, რომელიც შეამოწმებს არის თუ არა მასზე მიწოდებული სტრიქონი ცარიელი. მაგ. blankStringChecker(testString) => რომელიც დააბრუნებს this string is blank-ს თუ ცარიელია/ this string is not blank-ს თუ ცარიელი არაა.

let blank =  "blankStringChecker(testString)";
if (blank === "" ){
  console.log("/ this string is not blank")
} else if (blank === "blankStringChecker(testString)"){
    console.log("/ this string is blank")
}

switch (blank === "blankStringChecker(testString)"){
    case (blank === "") :
       console.log("/ this string is not blank");
       break;
    case (blank === "blankStringChecker(testString)") :
        console.log("/ this string is blank");
}

// // თ ერთგვარი ემაილის დამცველი ფუნქცია, რომლის ფუნქციონალი მდგომარეობს შემდგომში: მომხმარებელი გაწვდის ემაილს წერტილით გამოყოფილ თავისი სახელით და გვარით, beqa.beqauri@gmail.com, თქვენი ფუნქცია კი გამოიტანს მის დაცულ ვერსიას ამ ფორმით:  beqa……..@gmail.com.წერტილების ოდენობა უნდა ემთხვეოდეს გვარის სიგრძეს.
 let userEmile = "beqa.beqauri@gmail.com";
 if (userEmile = " beqa.beqauri@gmail.com"){
    console.log(" beqa.......@gmail.com");
 } 
 // // შექმენით ფუნქცია, რომელიც მასზე მიწოდებულ სტრიქონს გადააქცევს მასივად. მაგ. stringToArray(testString) => თუ მივაწვდით სტრიქონს “Hello, World” => გამოიტანს მის ვერსიას მასივში. [“Hello”, “World”]
  // // ეს პირობა ვერ გავიგე რას მთხოვს