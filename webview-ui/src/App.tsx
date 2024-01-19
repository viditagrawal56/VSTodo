import { vscode } from "./utilities/vscode";
import { VSCodeButton } from "@vscode/webview-ui-toolkit/react";
import "./App.css";

function App() {
  function handleClick() {
    vscode.postMessage({
      command: "hello",
      text: "Hey there!",
    });
  }

  return (
    <main>
      <h1>Hello World!</h1>
      <VSCodeButton onClick={handleClick}>Howdy!</VSCodeButton>
    </main>
  );
}

export default App;
