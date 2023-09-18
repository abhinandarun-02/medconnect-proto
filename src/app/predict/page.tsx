import { PredictionForm } from '@/components/prediction-form'

import axios from 'axios'
import { redirect } from 'next/navigation'

export default async function Prediction() {
  const response = await axios.get('http://127.0.0.1:5000/')
  if (response.data?.res != 'hello world') {
    redirect('/')
  }

  return (
    <div className="font-sans p-12 pt-36 h-full w-full flex flex-col gap-4 ">
      <div>
        <h1 className="font-medium text-4xl">Disease Prediction</h1>
      </div>
      <div>
        <PredictionForm />
      </div>
    </div>
  )
}
