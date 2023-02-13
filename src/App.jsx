import { Post } from './Post'

function App() {
  return (
    <div>

      <h1>Hello World!</h1>
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

