import "./App.css";
import { Button } from "./components/UI/Button";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
  return (
    <>
      <div className="bg-red-400">Hello World</div>
      <Button
        variant="secondary"
        size="md"
        onClick={() => {}}
        text="Share"
        endIcon={<ShareIcon size="md" />}
      />

      <Button
        variant="primary"
        size="lg"
        text="Add Content"
        onClick={() => {}}
        startIcon={<PlusIcon size="lg" />}
        endIcon={<ShareIcon size="lg" />}
      />
    </>
  );
}

export default App;
