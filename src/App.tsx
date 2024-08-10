import './App.css'
import Snackbar from "./components/pages/Snackbar"
import SnackbarProvider from "./components/providers/SnackbarProvider"

function App() {
  return (
    <SnackbarProvider>
      <Snackbar/>
    </SnackbarProvider>
  )
}

export default App
