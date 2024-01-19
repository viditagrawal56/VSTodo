// The module 'vscode' contains the VS Code extensibility API
import * as vscode from "vscode";
import { FirstPanel } from "./panels/FirstPanel";

// This method is called when your extension is activated
export function activate(context: vscode.ExtensionContext) {
  // The commandId parameter must match the command field in package.json
  context.subscriptions.push(
    vscode.commands.registerCommand("vstodo-.helloWorld", () => {
      // Display the firstPanel WebView
      FirstPanel.createOrShow(context.extensionUri);
    })
  );
}

// This method is called when your extension is deactivated
export function deactivate() {}
