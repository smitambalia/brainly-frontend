import "./App.css";
import { Button } from "./components/UI/Button";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
  return (
    <>
      <Button
        variant="primary"
        size="md"
        onClick={() => {}}
        text="Share"
        startIcon={<PlusIcon size="md" />}
        endIcon={<ShareIcon size="md" />}
      />
      <Button
        variant="secondary"
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
