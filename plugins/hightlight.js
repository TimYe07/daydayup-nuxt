import Vue from 'vue'

Vue.directive('highlight', function(el) {
  const elements = el.querySelectorAll('pre code')
  for (let i = 0; i < elements.length; i++) {
   /* eslint-disable */
    hljs.highlightBlock(elements[i])
    /* eslint-enable */
  }
})
