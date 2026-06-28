import {Button} from "@repo/ui"
import {formatCurrency} from "@repo/utils"
function App() {

  return (
    <>
      <h1>Complete Frontend Dev and Deployment Lifecycle</h1>
      <Button onClick={() => {alert(formatCurrency(12345))}} />
      <p>Some new feature!</p>
      <p>Again some new fixes</p>
    </>
  )
}

export default App
