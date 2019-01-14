var mainUrl = 'https://tutorials.webduino.io/zh-tw/docs/';
var utmUrl = '?utm_source=cloud-blockly&utm_medium=contextMenu&utm_campaign=tutorials';

Blockly.Blocks['relay_new_bit'] = {
  init: function () {
    function getPinDropdown() {
      return [
        ["0~", "0"],
        ["1~ ( A4 )", "1"],
        ["2~ ( A5 )", "2"],
        ["3~", "3"],
        ["4~", "4"],
        ["5 ( A7 )", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10~", "10"],
        ["11", "11"],
        ["13", "13"],
        ["14", "14"],
        ["15", "15"],
        ["16", "16"]
      ];
    }

    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_RELAY_BIT, "Relay ,  pin:")
      .appendField(new Blockly.FieldDropdown(getPinDropdown), "pin_");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(230);
    this.setHelpUrl(mainUrl + 'basic/component/relay.html' + utmUrl);
  }
};

Blockly.Blocks['relay_state'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable(" "), "relay_")
      .appendField(Blockly.Msg.WEBDUINO_RELAY_SET_STATE, "set state")
      .appendField(new Blockly.FieldDropdown([
        ["on", "on"],
        ["off", "off"]
      ]), "state_");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl(mainUrl + 'basic/component/relay.html' + utmUrl);
  }
};