import { Header } from './components/Header'
import { Post } from './Post'
import './global.css'
function App() {
  return (
    <div>

      <Header />
      <Post 
        author="Gustavo Caixeta" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit." 
      />
      <Post 
        author="Luísa Caixeta"
        content="Numquam modi, minus cupiditate nesciunt incidunt accusamus architecto officiis culpa a?"
      />
      <Post 
        author="Franciele Caixeta"
        content="NDoloremque harum, quia sint dolore voluptas necessitatibus asperiores sunt nostrum iste?"
      />
    </div>
  )
}

export default App

