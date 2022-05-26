import './App.css';
import Sidebar from'./resources/Sidebar'
import Dashboard from './resources/Dashboard';
import CurrentProjects from './resources/CurrentProjects';
import Headerbar from './resources/Headerbar';
import {ApolloClient,ApolloProvider,InMemoryCache,HttpLink,from} from '@apollo/client'
import { onError} from '@apollo/client/link/error'
const errorLink=onError(({grapqlErrors,networkError})=>{
  if(grapqlErrors){
    grapqlErrors.map(({message,location,_path}) => {
      alert(`Graphql error ${message} at ${location}`)
      console.log(grapqlErrors);
      return this
    })
  }
  else if (networkError){
    alert(`Network error ${networkError}`)
  }
})
const link = from([
  errorLink,
  new HttpLink({uri:'http://localhost:4000/graphql'})
])
const client= new ApolloClient({
  cache: new InMemoryCache(),
  link:link
})
function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <Sidebar/>
      <div className='appBody'>
      <Headerbar/>
      <Dashboard/>
      <CurrentProjects/>
      </div>
    </div>
    </ApolloProvider>
  );
}

export default App;
