import './index.css'
import { Button } from "./components/molecules/Button/Button"
import { GiHamburgerMenu } from 'react-icons/gi'

function App() {
  return (
    <main>
      <Button 
        variant="primary"
        // disabled
        // isLoading
        // icon={GiHamburgerMenu}
      >
        DEFAULT PRIMARY
      </Button>

      <Button 
        variant="secondary"
        // disabled
        // isLoading
        // icon={GiHamburgerMenu}
      >
        DEFAULT SECONDARY
      </Button>

      <Button 
        variant="tertiary"
        // disabled
        // isLoading
        // icon={GiHamburgerMenu}
      >
        DEFAULT TERTIARY
      </Button>
    </main>
  )
}

export default App
