const nums_arr = [1, 2, 3, 2]
const check_nums = (num) => num == 1 ? "One" : 
                         num == 2 ? "Two" : 
                         num == 3 ? "Three" :  
                         null 
                         
function num2wrd(arg_arr, arg_function){
  let words = []
  arg_arr.forEach(num => {
  let word = arg_function(num)
    words.push(word)
  });
  return words;
}
num2wrd(nums_arr, check_nums);