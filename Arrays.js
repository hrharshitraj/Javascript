/* Different types to declare array-
var names = ["Harshit","Gopal","Raunak"];
console.log(names);

var friends = new Array('Harshit','Gopal','Raunak');
console.log(friends);    // Harshit, Gopal, Raunak

# PUSH AND POP-
console.log(friends.pop());   // Raunak(last element of the array) is popped out; 
console.log(friends);   // Harshit, Gopal

friends.push('Jagriti');    // Jagriti is added into the array after the last index;
console.log(friends);    // Harshit, Gopal, Jagriti


# SPLICE - Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
var friends = new Array('Harshit','Gopal','Raunak');
console.log(friends);
// friends.splice(1);        // Removes every element from 1 to n-1, like(str.substring());
// console.log(friends);     // Harshit
friends.splice(1,1);         // Removes element at 1st index;
console.log(friends);        // Harshit, Raunak

# SORT and REVERSE-
var friends = new Array('Harshit','Gopal','Raunak');
console.log(friends);
friends.sort();
console.log(friends);
friends.reverse();
console.log(friends);
*/