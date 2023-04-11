// let calcAverageScore = function (a, b, c){
//     return (a + b + c) / 3;
// }

// let avgDelpins = (44, 23, 71);
// let avgKoalas = (65, 54, 49);

// function checkWinner(){

// }

// const num = ['arslonbek-alimbayev', 'jamshidbek-alimbayev', 'davronbek-valiyev'];
// const _nums = num.map(function(name){
//     return _nums.split("-")
// })
// console.log(num);
// console.log(_nums);

// let text = "How are you doing today?";
// const myArray = text.split(" ");
// console.log(myArray);

// const list = ['arslonbek 25', 'boburbek 34', 'davronbek 30'];

// let _list = list.map(function(item){
//     let son = item[item.length-2] + item[item.length-1];
//     let ism = item.substring(0, item.length-2)
//     return ` ${son} ${ism}`
// })
// console.log(_list);

// const groups = [['g', '8'],['d', '10'], ['s', '11']];

// const news = groups.map(function (item){
//     return item.join("-")
// })
// console.log(news);

// const num = [1,2,3,4]

// let a = num.filter(function (fun){
//     return fun % 2 === 1;
// })
// console.log(a);

// const str =
//     [20, 30] [30, 70]
// ;

// let news = str.map(function(item, item){
//     return item + item
// })

// console.log(news);

// let pdp = [1, 2, 3, 4];
// function map(total){
//  let sum = [];
//  for (let i = 0; i < pdp.length; i++){
//     sum[i]+= total(pdp[i]);
//  }
//   sum.push(pdp[item])

// }
// const news = map(function(item){
//     return `${item}  ${item}`;
// })
// console.log(sum);

// const fruits = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];

// function map(callback) {
// 	let result = [];
// 	for (let i = 0; i < fruits.length; i++) {
// 		result[i] = callback(fruits[i]);
// 	}

// 	return result;
// }

// const result1 = map(function (fruit) {
// 	return `${fruit}+${fruit}`;
// });
// console.log(result);

// const groups = [
//     	["g", "8"],
//     	["d", "10"],
//     	["g", "11"],
//     ];

//     const newGroups = groups.map(function (item) {
//     	return item.join("-");
//     });

// console.log(newGroups);

// const fruits = [1,6,4,,32,,5,6,6,4,4];

// let result = [];

// for(let i = 0; i < fruits.length; i++) {
//     result.filter(fruits[i]);
// }
// console.log(result);

// CODING CHALLANGE -1✅

// let markHeight = 1.88;
// let markMass = 80;
// let kentHeight = 1.98;
// let kentMass = 100;

// const markBmi = markMass / markHeight ** 2;
// console.log(markBmi);
// const kentBmi = kentMass / kentHeight ** 2;
// console.log(kentBmi);

// if(markBmi > kentBmi) {
//     console.log(`Mrks BMI: (${markBmi}) is higher than (${kentBmi})`);
// }
// else{
//     console.log(`Kent BMI: (${kentBmi}) is higher than (${markBmi})`);
// }

// CODING CHALLANGE -2✅
// let dolphins = (96 + 108 + 00) / 3;
// console.log('delfinlar bali :' ,dolphins);

// let koals = (96 + 108 + 100) / 3;
// console.log('kualalar bali :' ,koals);

// console.log('-----------------------------');

// if(dolphins > koals && dolphins >= 100){
//     console.log(`Dolphins team winners they are score : ${dolphins}🎖️`);
// }
// else if(koals > dolphins && koals >= 100){
//     console.log(`Koalas team winners they are score : ${koals}🎖️`);
// }
// else if(dolphins >= 100 && koals >= 100 && dolphins == koals){
//     console.log(`Durrang because They are scores: ${dolphins} and ${koals}`);
// }
// else{
//     console.log(`No winner team beacuse They are scores 100 > : ${dolphins} and ${koals}`);
// }

// CODING CHALLANGE -3✅
//switch case---------

// let day = "";

// switch (day) {
//   case "monday":
//     console.log("Darsga bosaman");
//     break;
//   case "thusday":
//     console.log("Uyda ish qilaman");
//     break;
//   case "wednesday":
//     console.log("Dars qilaman");
//     break;
//   case "friday":
//   case "sunday":
//     console.log("Oqishga boraman");
//     break;
//   default:
//     console.log("Kiritgan hafta kuni hato yoki kiritilmagan...");
// }

// // if else korinishida esa --------

// if (day === "monday") {
//   console.log("Darsga bosaman");
// } else if (day === "thusday") {
//   console.log("Uyda ish qilaman");
// } else if (day === "wednesday") {
//   console.log("Dars qilaman");
// } else if (day === "friday" && day === "sunday") {
//   console.log("Oqishga boraman");
// } else {
//   console.log("Kiritgan hafta kuni hato yoki kiritilmagan...");
// }


//TEMPLATE LITERS✅
// let age = 15;
// age = age >= 18 ? console.log('Voyaga yetgan') : console.log('Voyaga yetmagan');

// let drink;
// if(age >= 18){
//     drink = 'Flash ichish mumkin'
// }else{
//     drink = 'Flash ichish mumkin emas'
// }
// console.log(drink);

// console.log(`Men ${age >= 18 ? 'Flash ichishim mumkin' : 'Flash ichishim mumkin emas'}`);

//