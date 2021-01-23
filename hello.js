

function kilometerToMeter(kilometer){

          var result = kilometer * 1000;

          return result;
}
var meter = kilometerToMeter(5)

 console.log(meter);





function budgetCalculator(price){

     var result = price * 3;

     return result;
}
   var watch =  budgetCalculator(50);  
   var phone = budgetCalculator(100);
   var laptop = budgetCalculator(500);

   var total = (watch + phone + laptop)

console.log(total);




var largestName = megaFriend (["Dan", "Steve", "Christopher", "Yu", "Sarah", "Jonathan"]);

function megaFriend(name){
      var longestName = name[0];
      for (var i = 0; i < name.length; i++){
            var word = name[i];
      if (word.length > longestName.length){
            longestName = word;
      }
      }
      return longestName;
}
console.log(largestName);

