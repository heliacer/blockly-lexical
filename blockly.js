const workspace = Blockly.inject('blocklyDiv', {toolbox: toolbox});

LexicalVariablesPlugin.init(workspace);


function generateCode() {
  const code = javascript.javascriptGenerator.workspaceToCode(workspace);
  document.getElementById('code').value = code;
}