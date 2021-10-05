const lowerCaseWords = (mixedArray) => {
  return new Promise((resolve, reject) => {
    if (mixedArray.length >= 0 && Array.isArray(mixedArray)) {
      const strArray = mixedArray.filter((arrayElements) => typeof arrayElements === "string");
      const lowerCaseArray = strArray.map((filteredArrayElements) => filteredArrayElements.toLowerCase());
      resolve(lowerCaseArray);
    }
    else {
      reject("Array rejected")
    }
  });
};

const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];

lowerCaseWords(mixedArray)
  .then((value) => console.log(value))
  .catch((error) => console.log(error));

