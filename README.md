### How To Run 
```
1. git clone
2. yarn
3. yarn start 
```

### How To Run Cypress
```
1. yarn run cypress open
2. Wait Cypress UI Show
3. Press Run
```

 You can check demo [here](https://stockbit-challenge.vercel.app/home)


### Anagram Test

 ```
function bubbleSort(array) {
  var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        done = false;
        var tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }

  return array;
}

function anagrams(arr) {
  let finalArr = [];
  let temp = {};
  let i;
  for (i = 0; i < arr.length; i++) {
    result = bubbleSort(arr[i].split("")).join("");
    if (temp[result] == undefined) {
      temp[result] = [arr[i]];
    } else {
      temp[result].push(arr[i]);
    }
  }

  for (var [key, value] of Object.entries(temp)) {
    finalArr.push(value);
  }

  return finalArr;
}

anagrams(["kita", "atik", "tika", "aku", "kia", "makan", "kua"])
```