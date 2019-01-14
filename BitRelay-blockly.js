+(function (window, webduino) {

  'use strict';

  window.getRGBLed = function (board, red, green, blue) {
    return new webduino.module.RGBLed(board, board.getDigitalPin(red), board.getDigitalPin(green), board.getDigitalPin(blue));
  };

}(window, window.webduino));
