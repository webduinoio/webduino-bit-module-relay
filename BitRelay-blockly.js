+(function (window, webduino) {

  'use strict';

  window.getRelay = function (board, pin) {
    return new webduino.module.Relay(board, board.getDigitalPin(pin));
  };

}(window, window.webduino));
