import { Suspense } from 'react'
import './App.css'
import ApiCall from './apiCall'
const fetchData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return data;
}
function App() {
  const postPromise = fetchData();
  return (
    <>

      <Suspense fallback={<h3>Loading...</h3>}>
        <ApiCall postPromise={postPromise}></ApiCall>
      </Suspense>

    </>
  )
}
export default App
