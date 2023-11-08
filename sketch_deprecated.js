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
  createCookies();
}

function createCookies() {
  let rows = 80;
  let columns = 100;
  for (let c = 0; c < cookies; c++) {
    if (c % 3 == 0 && c != 0) rows += 300;
    if (((c + 1) * 120) % 2 == 1 && c != 1) columns += 80;
    new Cookie(
      columns,
      rows,
      cookies_close[c],
      cookies_open[c]
    ).displayCloseCookie();
  }
}

function draw() {}

const imageSize = 0.16 * windowWidth;

class Cookie {
  constructor(x, y, closeCookie, openCookie) {
    this.x = x;
    this.y = y;
    this.closeCookie = closeCookie;
    this.openCookie = openCookie;
    this.open = false;
  }

  displayCloseCookie() {
    image(this.closeCookie, this.x, this.y, imageSize, imageSize);
  }

  displayOpenCookie() {
    image(this.openCookie, this.x, this.y, imageSize, imageSize);
  }
}