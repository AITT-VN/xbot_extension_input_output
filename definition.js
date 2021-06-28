Blockly.Blocks["xbot_input_led"] = {
  init: function () {
    this.jsonInit({
      colour: "#52BCEC",
      tooltip: "",
      message0: "%4 %1 đèn led cổng %2 pin %3",
      args0: [
        {
          type: "field_dropdown",
          name: "stat",
          options: [
            ["bật", "1"],
            ["tắt", "0"],
            ["đảo trạng thái", "2"],
          ],
        },
        {
          type: "field_dropdown",
          name: "port",
          options: [
            ["1", "1"],
            ["2", "2"],
            ["3", "3"],
            ["4", "4"],
            ["5", "5"],
            ["6", "6"],
          ],
        },
        {
          type: "field_dropdown",
          name: "pin",
          options: [
            ["1","1"],
            ["2","2"],
          ],
        },
        {
          "type": "field_image",
          "src": "https://i.ibb.co/JqYtNW6/image.png",
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        }
      ],
      previousStatement: null,
      nextStatement: null,
      helpUrl: "",
    });
  },
};

Blockly.Blocks["xbot_input_button"] = {
  init: function () {
    this.jsonInit({
      colour: "#52BCEC",
      tooltip: "",
      message0: "%3 nút nhấn cổng %1 chân %2 được nhấn",
      args0: [
        {
          type: "field_dropdown",
          name: "port",
          options: [
            ["1", "1"],
            ["2", "2"],
            ["3", "3"],
            ["4", "4"],
            ["5", "5"],
            ["6", "6"],
          ],
        },
        {
          type: "field_dropdown",
          name: "pin",
          options: [
            ["1","1"],
            ["2","2"],
          ],
        },
        {
          "type": "field_image",
          "src": "https://i.ibb.co/Q9cp6dt/button.png",
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        }
      ],
      output: "Boolean",
      helpUrl: "",
    });
  },
};

Blockly.Blocks['xbot_mini_fan'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "xbot_mini_fan",
        "message0": "%3 mini fan cổng %1 tốc độ %2 (-100 đến 100)",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "port",
            "options": [
              ["1", "0"],
              ["2", "1"],
              ["3", "2"],
              ["4", "3"],
              ["5", "4"],
              ["6", "5"],
            ],
          },
          {
            "type": "input_value",
            "name": "speed"
          },
          {
            "type": "field_image",
            "src": "https://i.ibb.co/JRssYz5/image.png",
            "width": 20,
            "height": 20,
            "alt": "*",
            "flipRtl": false
            }
        ],
        "colour": "#52BCEC",
        "previousStatement": null,
        "nextStatement": null,
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Blocks["xbot_input_joystick"] = {
  init: function () {
    this.jsonInit({
      colour: "#52BCEC",
      tooltip: "",
      message0: "%3 joystick cổng %1 đọc giá trị %2",
      args0: [
        {
          type: "field_dropdown",
          name: "port",
          options: [
            ["4", "4"],
            ["5", "5"],
            ["6", "6"],
          ],
        },
        {
          type: "field_dropdown",
          name: "pin",
          options: [
            ["x","1"],
            ["y","2"],
          ],
        },
        {
          "type": "field_image",
          "src": "https://i.ibb.co/Sx4PmN8/image.png",
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        }
      ],
      output: "Boolean",
      helpUrl: "",
    });
  },
};

Blockly.Blocks["xbot_input_rotary_analog"] = {
  init: function () {
    this.jsonInit({
      colour: "#52BCEC",
      tooltip: "",
      message0: "%3 biến trở xoay cổng %1 pin %2 đọc giá trị",
      args0: [
        {
          type: "field_dropdown",
          name: "port",
          options: [
            ["4", "4"],
            ["5", "5"],
            ["6", "6"],
          ],
        },
        {
          type: "field_dropdown",
          name: "pin",
          options: [
            ["1","1"],
            ["2","2"],
          ],
        },
        {
          "type": "field_image",
          "src": "https://i.ibb.co/z79t5pR/rotate.png",
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        }
      ],
      output: "Number",
      helpUrl: "",
    });
  },
};

Blockly.Blocks["xbot_input_relay"] = {
  init: function () {
    this.jsonInit({
      colour: "#52BCEC",
      tooltip: "",
      message0: "%4 %1 relay cổng %2 pin %3",
      args0: [
        {
          type: "field_dropdown",
          name: "stat",
          options: [
            ["bật", "1"],
            ["tắt", "0"],
            ["đảo trạng thái", "2"],
          ],
        },
        {
          type: "field_dropdown",
          name: "port",
          options: [
            ["1", "1"],
            ["2", "2"],
            ["3", "3"],
            ["4", "4"],
            ["5", "5"],
            ["6", "6"],
          ],
        },
        {
          type: "field_dropdown",
          name: "pin",
          options: [
            ["1","1"],
            ["2","2"],
          ],
        },
        {
          "type": "field_image",
          "src": "https://i.ibb.co/Ln4R2tL/image.png",
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        }
      ],
      previousStatement: null,
      nextStatement: null,
      helpUrl: "",
    });
  },
};

// ============================ PYTHON GENERATE==========================

Blockly.Python["xbot_input_led"] = function (block) {
  var port = block.getFieldValue("port");
  var pin = block.getFieldValue("pin");
  var stat = block.getFieldValue("stat");
  // TODO: Assemble Python into code variable.
  var code;
  if (stat == 2){
    code = "pin" + port + pin + ".write_digital(1 - pin" + port + pin + ".read_digital())\n";}
  else{
    code = "pin" + port + pin + ".write_digital(" + stat + ")\n";}
  return code;
};

Blockly.Python["xbot_input_button"] = function (block) {
  var port = block.getFieldValue("port");
  var pin = block.getFieldValue("pin");
  // TODO: Assemble Python into code variable.
  var code = "pin" + port + pin + ".read_digital() == 0"
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["xbot_mini_fan"] = function (block) {
  var port = block.getFieldValue("port");
  var speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_mini_fan'] = 'from mini_fan import mini_fan';
  // TODO: Assemble Python into code variable.
  var code = 'mini_fan.speed(' + port + ', ' + speed + ')\n'
    return code;
  };

Blockly.Python["xbot_input_joystick"] = function (block) {
  var port = block.getFieldValue("port");
  var pin = block.getFieldValue("pin");
  // TODO: Assemble Python into code variable.
  var code = "pin"+ port + pin +".read_analog()";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["xbot_input_rotary_analog"] = function (block) {
  var port = block.getFieldValue("port");
  var pin = block.getFieldValue("pin");
  // TODO: Assemble Python into code variable.
  var code = "pin"+ port + pin +".read_analog()";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["xbot_input_relay"] = function (block) {
  var port = block.getFieldValue("port");
  var pin = block.getFieldValue("pin");
  var stat = block.getFieldValue("stat");
  // TODO: Assemble Python into code variable.
  var code;
  if (stat == 2){
    code = "pin" + port + pin + ".write_digital(1 - pin" + port + pin + ".read_digital())\n";}
  else{
    code = "pin" + port + pin + ".write_digital(" + stat + ")\n";}
  return code;
};