;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-arrowright" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M242.096 994.614c28.463 27.573 74.517 27.573 102.98 0l436.927-423.683c28.463-27.573 28.463-72.244 0-99.818l-437.025-423.782c-14.231-13.738-32.812-20.655-51.49-20.655s-37.259 6.918-51.49 20.655c-28.463 27.573-28.463 72.343 0 99.917l385.436 373.774-385.436 373.774c-28.364 27.573-28.364 72.244 0.099 99.818z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-fangxiang" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M510.740671 510.21913m-508.819876 0a508.819876 508.819876 0 1 0 1017.639752 0 508.819876 508.819876 0 1 0-1017.639752 0Z" fill="#DF71F5" ></path>'+
      ''+
      '<path d="M510.740671 510.21913m-355.442485 0a355.442484 355.442484 0 1 0 710.884969 0 355.442484 355.442484 0 1 0-710.884969 0Z" fill="#F8E71C" ></path>'+
      ''+
      '<path d="M766.136447 841.944248h-510.791553c-42.155727 0-76.322981-34.173615-76.322981-76.322981V254.823354c0-42.149366 34.167255-76.322981 76.322981-76.322981h510.791553c42.155727 0 76.322981 34.173615 76.322982 76.322981v510.791553c0 42.155727-34.167255 76.322981-76.322982 76.322981z" fill="#FFFFFF" ></path>'+
      ''+
      '<path d="M543.941168 305.311006H477.482932l33.264099-85.888795z" fill="#E8EDEB" ></path>'+
      ''+
      '<path d="M510.740671 510.21913m-219.727503 0a219.727503 219.727503 0 1 0 439.455006 0 219.727503 219.727503 0 1 0-439.455006 0Z" fill="#E8EDEB" ></path>'+
      ''+
      '<path d="M397.203876 352.783901l-43.942957 43.936596-29.924969-73.918808zM668.182261 623.755925l-43.949317 43.942957 73.925168 29.924969zM397.203876 667.66072l-43.942957-43.942956-29.924969 73.918807zM668.182261 396.688696l-43.949317-43.949317 73.925168-29.924969zM543.941168 715.133615H477.482932l33.264099 85.888795zM305.832547 543.419627V476.961391l-85.888795 33.2641zM715.655155 543.419627V476.961391l85.882435 33.2641z" fill="#E8EDEB" ></path>'+
      ''+
      '<path d="M510.740671 522.939627m-187.926261 0a187.926261 187.926261 0 1 0 375.852522 0 187.926261 187.926261 0 1 0-375.852522 0Z" fill="#2283F6" ></path>'+
      ''+
      '<path d="M510.740671 510.21913m-187.926261 0a187.926261 187.926261 0 1 0 375.852522 0 187.926261 187.926261 0 1 0-375.852522 0Z" fill="#2283F6" ></path>'+
      ''+
      '<path d="M539.412671 536.467876l-57.401242-57.401242 203.947726-146.495603z" fill="#FE3D50" ></path>'+
      ''+
      '<path d="M482.011429 479.066634l-146.495603 203.947726 203.896845-146.540124" fill="#FFFFFF" ></path>'+
      ''+
      '<path d="M505.525267 512.992199m-21.096944 0a21.096944 21.096944 0 1 0 42.193888 0 21.096944 21.096944 0 1 0-42.193888 0Z" fill="#F8E71C" ></path>'+
      ''+
      '<path d="M510.734311 507.789516m-21.096945 0a21.096944 21.096944 0 1 0 42.193889 0 21.096944 21.096944 0 1 0-42.193889 0Z" fill="#F8E71C" ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
