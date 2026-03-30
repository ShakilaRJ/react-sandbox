import { AppleBasket } from "./components/AppleBasket"
import { AppleButton } from "./components/AppleButton"
import { MovieList } from "./components/MovieList"

function App() {
  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <AppleButton />
      <AppleBasket />
      <MovieList />
    </div>
  )
}

export default App