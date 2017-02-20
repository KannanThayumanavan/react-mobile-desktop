function isMobile () {
  if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
  ){
    return true;
  }
  else {
    return false;
  }
}

function isMobileResolution () {
  var screenWidth = window.screen.width;
  if (screenWidth > 1224) {
    return "Desktop";
  } else if (screenWidth >= 768 && screenWidth <= 1024) {
    return "Tablet";
  } else if (screenWidth < 768) {
    return "Mobile";
  }
}
