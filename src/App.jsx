import Card from './assets/components/Card';

import { useState, useEffect } from 'react';

export default function App() {

  const [politici, setPolitici] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/politicians')
      .then(res => res.json())
      .then(data => setPolitici(data))
      .catch(error => console.error(error))
  }, [])

  return (
    <>

      <h1>I Politici</h1>
      <div className='container'>
        <div className='row'>
          {
            politici.map((p) => {
              return (
                <Card key={p.id} politico={p} />
              )
            })
          }
        </div>
      </div>
    </>
  )
}

