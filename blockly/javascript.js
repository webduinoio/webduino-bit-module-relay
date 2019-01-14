Blockly.JavaScript['relay_new_bit'] = function (block) {
  var dropdown_pin_ = block.getFieldValue('pin_');
  var code = 'getRelay(board, bitGPIO(' + dropdown_pin_ + '))';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};


Blockly.JavaScript['relay_state'] = function (block) {
  var variable_relay_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('relay_'), Blockly.Variables.NAME_TYPE);
  var dropdown_state_ = block.getFieldValue('state_');
  var code = variable_relay_ + '.' + dropdown_state_ + '();\n';
  return code;
};