'use client'

import { useState } from 'react'
import axios from 'axios'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'

const FormSchema = z.object({
  symptoms: z
    .string()
    .min(3, {
      message: 'symptoms must be at least 3 characters.',
    })
    .max(160, {
      message: 'Bio must not be longer than 30 characters.',
    }),
})

export function PredictionForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  const [disease, setDisease] = useState<string | null>(null)

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const response = await axios.get(
      `http://127.0.0.1:5000/predict?symptoms=${data.symptoms}`
    )
    const responseData = response.data
    setDisease(responseData.prediction)
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <FormField
            control={form.control}
            name="symptoms"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter Your Symptoms</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Chills, Anxiety, ..."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="hover:bg-black hover:scale-105">
            Predict
          </Button>
        </form>
      </Form>
      {disease && (
        <div className="mt-8 flex flex-col gap-4">
          <h2 className="text-2xl font-medium">Prediction : {disease}</h2>
          <h3 className="text-lg">
            An allergy is when your immune system reacts unusually to certain
            substances that are typically harmless, like pollen, dust, or
            certain foods. When your body encounters these substances, it
            overreacts, causing symptoms like sneezing, itching, or a rash. Its
            important to identify your specific triggers and work with a
            healthcare provider to manage your allergies effectively and improve
            your quality of life.
          </h3>
        </div>
      )}
    </>
  )
}
