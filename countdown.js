;(function (e, i, h, f, c, b, d) {
  ;(d = new Date()),
    (h += '?v=' + d.getFullYear() + d.getMonth() + d.getDate() + d.getHours()),
    (c = e.createElement(i)),
    (b = e.getElementsByTagName(i)[0])
  if (e.getElementById(f)) {
    return
  }
  c.src = h
  c.id = f
  b.parentNode.insertBefore(c, b)
})(
  document,
  'script',
  'https://d1nmxxg9d5tdo.cloudfront.net/69/files/countdown_api.js',
  'countdown-timer'
)
