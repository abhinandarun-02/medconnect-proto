import { PredictionForm } from '@/components/prediction-form'

import axios from 'axios'
import { redirect } from 'next/navigation'

export default async function Prediction() {
  const response = await axios.get('http://127.0.0.1:5000/')
  if (response.data?.res != 'hello world') {
    redirect('/')
  }

  return (
    <div className="font-sans m-12 rounded-2xl bg-foreground drop-shadow-xl">
      <div className="px-6 py-24 flex flex-col gap-4 w-full">
        <h1 className="font-medium text-4xl">Disease Prediction</h1>
        <PredictionForm />
      </div>
    </div>
  )
}
