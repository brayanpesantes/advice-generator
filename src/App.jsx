import React, { useState, useEffect, useCallback } from 'react'
import { Card } from './components/Card'

import { getAdvice } from './api/advice'

const App = () => {
  const [text, setText] = useState({})
  const [loading, SetLoading] = useState(true)

  const advice = useCallback(
    async () => {
      SetLoading(true)
      setText({})
      setText(await getAdvice())
      SetLoading(false)
    },
    [text]
  )

  useEffect(() => {
    advice()
  }, [])

  return (
    <div className='container'>
      <Card advice={text} loading={loading} getAdvices={advice} />
    </div>
  )
}

export default App
