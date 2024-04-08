'use client';

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

import { Label } from "@/components/ui/label"

import { useFormState } from 'react-dom';
import { contactSubmit } from "@/app/actions";
import { useEffect } from "react";
 
const initialState = {
  errors: {},
  message: '',
}

export default function ContactForm() {
  const [state, formAction] = useFormState(contactSubmit, initialState)

  useEffect(() => {
    if (state.message === '') return;
    
    toast({
      title: state.message
    })
  }, [state])

  return (
    <form action={formAction} className="grid gap-4">
      <div className="grid gap-3">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" placeholder="John Doe" required />
        <p className="text-red-500">
          {state.errors?.name}
        </p>
      </div>
      <div className="grid gap-3">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          placeholder="hello@example.com"
          required
          type="email"
        />
        <p className="text-red-500">
          {state.errors?.email}
        </p>
      </div>
      <div className="grid gap-3">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Hello, John Doe!"
          required
        />
        <p className="text-red-500">
          {state.errors?.message}
        </p>
      </div>
      {/* <p>
        {state?.message}
      </p> */}
      <Button type="submit">Submit</Button>
    </form>
  )
}