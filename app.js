// echo "# Assignment-21" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/SyedWaleedAli71/Assignment-21.git
// git push -u origin main


// Assignment # 21
// FUNCTIONS, SWITCH
// STATEMENTS, WHILE... DO-
// WHILE LOOPS

// Q.1
// function power(a,b){
//     let result = 1;
//     let i  = 1;

// while(i <= b){
//     result= result * a;
//     i++;
// }
// return result;

// }
// let ans = power(2,3);
// console.log("Answer: " + ans);


// Q.2
// function checkLeapYear(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//     return "Leap Year";
//   } else {
//     return "Not a Leap Year";
//   }
// }

// let year = +prompt("Enter a year");

// let result = checkLeapYear(year);

// document.writeln(year + " is " + result);

// Q.3
// function calculateS(a, b, c) {
//   return (a + b + c) / 2;
// }

// function calculateArea(a, b, c) {
//   let S = calculateS(a, b, c);
//   return Math.sqrt(S * (S - a) * (S - b) * (S - c));
// }

// let a = 5, b = 6, c = 7;
// let area = calculateArea(a, b, c);
// document.writeln("Area of Triangle: " + area);

// Q.4
// function calculateAverage(m1, m2, m3) {
//   return (m1 + m2 + m3) / 3;
// }

// function calculatePercentage(m1, m2, m3) {
//   let totalMarks = 300;
//   let obtained = m1 + m2 + m3;
//   return (obtained / totalMarks) * 100;
// }

// function mainFunction() {
//   let marks1 = 85;
//   let marks2 = 78;
//   let marks3 = 90;

//   let avg = calculateAverage(marks1, marks2, marks3);
//   let per = calculatePercentage(marks1, marks2, marks3);

//   document.writeln("Average Marks: " + avg + "<br>");
//   document.writeln("Percentage: " + per + "%");
// }

// mainFunction();

// Q.5
// function myIndexOf(str, ch) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === ch) {
//       return i;
//     }
//   }
//   return -1;
// }

// // Testing
// document.writeln(myIndexOf("hello", "e") + "<br>");
// document.writeln(myIndexOf("hello", "z"));

// Q.6
// function removeVowels(sentence) {
//   let result = "";

//   for (let i = 0; i < sentence.length; i++) {
//     let ch = sentence[i].toLowerCase();

//     if (ch !== 'a' && ch !== 'e' && ch !== 'i' && ch !== 'o' && ch !== 'u') {
//       result += sentence[i];
//     }
//   }

//   return result;
// }

// // Testing
// document.writeln(removeVowels("Hello World"));

// Q.7
// function countDoubleVowels(sentence) {
//   let count = 0;
//   let vowels = ['a','e','i','o','u'];

//   for (let i = 0; i < sentence.length - 1; i++) {
//     let ch1 = sentence[i].toLowerCase();
//     let ch2 = sentence[i+1].toLowerCase();

//     switch(ch1) {
//       case 'a':
//       case 'e':
//       case 'i':
//       case 'o':
//       case 'u':
//         switch(ch2) {
//           case 'a':
//           case 'e':
//           case 'i':
//           case 'o':
//           case 'u':
//             count++;
//             break;
//         }
//         break;
//     }
//   }

//   return count;
// }

// let text = "Pleases read this application and give me gratuity";
// document.writeln("Number of double vowels: " + countDoubleVowels(text));

// Q.8
// function toMeters(km) {
//   return km * 1000;
// }

// function toFeet(km) {
//   return km * 3280.84;
// }

// function toInches(km) {
//   return km * 39370.1;
// }

// function toCentimeters(km) {
//   return km * 100000;
// }

// let distanceKm = parseFloat(prompt("Enter distance between two cities (in km):"));

// document.writeln("Distance in meters: " + toMeters(distanceKm) + " m<br>");
// document.writeln("Distance in feet: " + toFeet(distanceKm).toFixed(2) + " ft<br>");
// document.writeln("Distance in inches: " + toInches(distanceKm).toFixed(2) + " in<br>");
// document.writeln("Distance in centimeters: " + toCentimeters(distanceKm) + " cm<br>");

// Q.9
// function calculateOvertime(hoursWorked) {
//   let overtimeRate = 12; 
//   let overtimeHours = 0;

//   if (hoursWorked > 40) {
//     overtimeHours = hoursWorked - 40;
//   }

//   return overtimeHours * overtimeRate;
// }

// let hours = parseInt(prompt("Enter total hours worked by employee:"));

// let overtimePay = calculateOvertime(hours);

// document.writeln("Total hours worked: " + hours + "<br>");
// document.writeln("Overtime pay: Rs. " + overtimePay);

// Q.10
// function cashierNotes() {
//   let hundreds = +prompt("Enter amount in hundreds:");
//   let amount = hundreds * 100;

//   let notes100 = Math.floor(amount / 100);
//   amount = amount % 100;

//   let notes50 = Math.floor(amount / 50);
//   amount = amount % 50;

//   let notes10 = Math.floor(amount / 10);

//   document.writeln("100 Rupee Notes: " + notes100 + "<br>");
//   document.writeln("50 Rupee Notes: " + notes50 + "<br>");
//   document.writeln("10 Rupee Notes: " + notes10);
// }

// cashierNotes();
