
export default function (target = document.body) {
  const scrollContainer = window

  // with animation
  var from = scrollContainer.pageYOffset
  var to = target.offsetTop ? target.offsetTop : 0
  var by = to - from
  var currentIteration = 0
  let lastTime = 0

  // polyfill requestAnimationFrame
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (callbackFn) {
      var currTime = new Date().getTime()
      var timeToCall = Math.max(0, 16 - (currTime - lastTime))
      var id = window.setTimeout(() => { callbackFn(currTime + timeToCall) }, timeToCall)
      lastTime = currTime + timeToCall
      return id
    }
  }

  /**
   * get total iterations
   * 60 -> requestAnimationFrame 60/second
   * second parameter -> time in seconds for the animation
   **/
  var animIterations = Math.round(60 * 0.8)

  function scroll () {
    var value = easeOutCubic(currentIteration, from, by, animIterations)
    scrollContainer.scrollTo(0, value)
    currentIteration++
    if (currentIteration < animIterations) {
      window.requestAnimationFrame(scroll)
    }
  }

  scroll()
}

// example easing functions
// function linearEase (currentIteration, startValue, changeInValue, totalIterations) {
//   return changeInValue * currentIteration / totalIterations + startValue
// }
function easeOutCubic (currentIteration, startValue, changeInValue, totalIterations) {
  return changeInValue * (Math.pow(currentIteration / totalIterations - 1, 3) + 1) + startValue
}
