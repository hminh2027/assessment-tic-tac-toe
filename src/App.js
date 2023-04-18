import { AppProvider } from "./contexts/context";
import GameScreenManager from "./GameScreenManager";

function App() {
  return (
    <AppProvider>
      <div className="flex h-screen items-center">
        <GameScreenManager />
      </div>
    </AppProvider>
  );
}

export default App;
