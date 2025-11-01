import './App.css'
import Cabecalho from "./components/Apresentacao";
import Corpo from "./components/Corpo/index.tsx";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <article className="max-w-7xl mx-auto bg-white dark:bg-gray-800 shadow-lg">
        <Cabecalho />
        <Corpo />
      </article>
    </div>
  )
}

export default App
