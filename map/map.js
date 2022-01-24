const argArr = [1, 2, 3, 2]
// const addFive = (num) => String(num)

// check each number in argArr
// if number equals 1 return "one" , 2 return "two", 3 return "three"
const num2wrd = (num) => num == 1 ? "One" : 
                         num == 2 ? "Two" : 
                         num == 3 ? "Three" :  
                         null 
                         
function ourMap(argArr, argFunction){
  console.log("array", argArr)
  // we need a new empty array
  let result = []
  // iterate for each element in arg array
  argArr.forEach(element => {
  let sum = argFunction(element)
    result.push(sum)
  });
  console.log("result", result)
  // apply arg function
  // place in the new array
  // return new array 
  return result;
}
// callback function
ourMap(argArr, num2wrd);

// turn numbers into strings "one", "two", "three"