let ArrayOfColors = ['red', 'green', 'blue', 'alpha','green' , 'blue'];

let copiedArrayOfColors = ArrayOfColors;
ArrayOfColors.pop();
// console.log(ArrayOfColors);
// console.log(copiedArrayOfColors);
let shadowCopiedArrayOfColorsV1 = ArrayOfColors.slice(1,4);
//shadowCopiedArrayOfColors.pop();

// console.log(shadowCopiedArrayOfColorsV1);
// console.log(ArrayOfColors);

let shadowCopiedArrayOfColorsV2 = [...ArrayOfColors];//shadow copied array of colors

// console.log(shadowCopiedArrayOfColorsV2);

let shadowCopiedArrayOfColorsV3 = Array.from(ArrayOfColors);
ArrayOfColors.pop();
// console.log(shadowCopiedArrayOfColorsV3);
// console.log(ArrayOfColors);

