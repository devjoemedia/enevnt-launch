'use client'

import { Card, CardContent } from "@/components/ui/card"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import SpeakersForm from "./component/speakers-form"
import PartnersForm from "./component/partners-form"
import { useForm } from 'react-hook-form';

const BasicForm = () => {
    const { register,
    reset,
    setValue,
    getValues,
    watch,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    control
  } = useForm<any>({
    defaultValues: {
      type: 'RETAIL',
      published: true,
      hasvariant: false,
      wholesaleTiers: [{ minQty: 0, pricePerUnit: 0 }],
      specifications: [{ name: '', value: '' }],
      tags: [],
      features: [],
    },
  });

  return (
    <Card className="overflow-y-scroll border-0 p-0 max-w-xl shadow-none rounded-none w-full h-[90vh] ">
      <CardContent className="grid p-0 gap-5">
        <form className="p-6 md:p-8">
          <FieldGroup>
            <div className="flex flex-col items-center gap-2 text-center">
              <h1 className="text-2xl font-bold">Create your eLaunch page</h1>
              <p className="text-muted-foreground text-sm text-balance">
                Enter your event details below
              </p>
            </div>
            <Field>
              <FieldLabel htmlFor="email">Title</FieldLabel>
              <Input
                id="title"
                type="text"
                placeholder="reactsummit 2025"
                required
              />
            </Field>
            <Field>
              <Field className="grid grid-cols-2 gap-4">
                <Field>
                  <FieldLabel htmlFor="date">Date</FieldLabel>
                  <Input id="date" type="date" required />
                </Field>
                <Field>
                  <FieldLabel htmlFor="time">
                    Time
                  </FieldLabel>
                  <Input id="time" type="time" required />
                </Field>
              </Field>
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Location</FieldLabel>
              <Input
                id="location"
                type="text"
                placeholder="Skyline Convention Center, San Francisco, CA"
                required
              />
            </Field>
            <Field>
              <div className="flex justify-between items-center">
                <FieldLabel htmlFor="email">Description</FieldLabel>
                <button className="text-sm text-muted-foreground bg-[#f5f5f5] rounded px-2 py-1">
                  AI Generation
                </button>
              </div>
              <Textarea
                id="description"
                placeholder="Describe your event"
                required
                className="min-h-32"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Host</FieldLabel>
              <Input
                id="host"
                type="text"
                placeholder="Host name"
                required
              />
            </Field>
            <SpeakersForm />
            <PartnersForm 
              watch={watch}
              errors={errors}
              setValue={setValue}
              control={control}
              register={register}
            />
            <div>
              <button type="submit" className='bg-gray-800 w-full text-white px-4 py-3.5! rounded-full mt-5'>
                Save
              </button>
            </div>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}

export default BasicForm