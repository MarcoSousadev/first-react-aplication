import { Post } from './post'
import './global.css'
import { Header } from './components/header'


export function App() {


  return (
    <div>
      <Header/>

      <Post 
        author="Marco Sousa"  
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate voluptate est quo, quas, animi excepturi consectetur expedita odit, aspernatur maiores sunt eveniet id. Officia mollitia ipsum omnis error doloremque voluptates."     
      />
      <Post
        author="Gabriel Buzzi"
        content="Um novo post muito legal"
      />

    </div>
    
  )
}

