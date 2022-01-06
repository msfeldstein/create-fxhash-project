// these are the variables you can use as inputs to your algorithms
console.log(fxhash)   // the 64 chars hex number fed to your algorithm
console.log(fxrand()) // deterministic PRNG function, use it instead of Math.random()

// note about the fxrand() function 
// when the "fxhash" is always the same, it will generate the same sequence of
// pseudo random numbers, always



const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')
ctx.fillStyle = "red"
ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 4, 0, Math.PI * 2)
ctx.fill()

//----------------------
// defining features
//----------------------
// You can define some token features by populating the $fxhashFeatures property
// of the window object.
// More about it in the guide, section features:
// [https://fxhash.xyz/articles/guide-mint-generative-token#features]
//

window.$fxhashFeatures = {
  "Shape": "Circle",
  "Color": "Red"
}

// Call fxpreview when its done to grab the snapshot
fxpreview()