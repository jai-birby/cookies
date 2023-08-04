const cookies = 6;

let cookies_open = [],
  cookies_close = [];

function preload() {
  for (let i = 0; i < cookies; i++) {
    cookies_open.push(loadImage("img/cookie_open_" + (i + 1) + ".png"));
    cookies_close.push(loadImage("img/cookie_close_" + (i + 1) + ".png"));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  let row = 80;
  for (let c = 0; c < cookies; c++) {
    if (c % 3 == 0 && c != 0) row += 300;
    new Cookie(
      (c + 1) * 120,
      row,
      cookies_close[c],
      cookies_open[c]
    ).displayCloseCookie();
  }
}

function draw() {}

class Cookie {
  constructor(x, y, closeCookie, openCookie) {
    this.x = x;
    this.y = y;
    this.closeCookie = closeCookie;
    this.openCookie = openCookie;
    this.open = false;
  }

  displayCloseCookie() {
    image(this.closeCookie, this.x, this.y, 250, 250);
  }

  displayOpenCookie() {}
}
