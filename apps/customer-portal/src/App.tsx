import {Button} from "@repo/ui"
import {formatCurrency} from "@repo/utils"
import Header from "./shared/components/Header/Header"
function App() {

  return (
    <>
      <Header />
      <h1>Complete Frontend Dev and Deployment Lifecycle</h1>
      <Button onClick={() => {alert(formatCurrency(12345))}} />
    </>
  )
}

export default App
