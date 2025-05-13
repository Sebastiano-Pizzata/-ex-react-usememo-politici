import Card from './assets/components/Card';

import { useState, useEffect, useMemo } from 'react';

export default function App() {

  const [politici, setPolitici] = useState([]);
  const [politico, setPolitico] = useState('')

  useEffect(() => {
    fetch('http://localhost:5000/politicians')
      .then(res => res.json())
      .then(data => setPolitici(data))
      .catch(error => console.error(error))
  }, [])


  const fitroPolitici = useMemo(() => {
    return politici.filter((p) => {
      const nome = p.name.toLowerCase().includes(politico.toLowerCase());
      const biografia = p.biography.toLowerCase().includes(politico.toLowerCase());
      return nome || biografia
    })
  }, [politici, politico])

  return (
    <>
      <h1>I Politici</h1>
      <div className='row'>
        <div className='col-3 m-3'>
          <input
            type="text"
            className='form-control'
            placeholder='Cerca per nome o biografia'
            value={politico}
            onChange={e => setPolitico(e.target.value)} />
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          {
            fitroPolitici.map((p) => {
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

