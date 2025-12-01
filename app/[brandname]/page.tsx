'use client'
import { useBasicFormStore } from '@/core/theme/basic/basic-store'
import { Theme } from '@/core/theme/basic/types'
import BasicFormPreview from '@/core/theme/basic/ui-preview'
import { LoaderIcon } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const brandmanes = [
  "youthBlaze@2026",
  "iamjdnartey",
  "eLaunch"
]

const Page = () => {
  const { brandname } = useParams<{ brandname: string }>()
  const [brand, setBrand] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)
  const router = useRouter()

  // brand details
  const event = useBasicFormStore((state) => state.formData)

  useEffect(() => {
    setTimeout(() => {
      const brandExist = brandmanes.find((item) => item === brandname)
      if (brandExist) {
        setBrand(brandname)
      }
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) {
    return (
      <div className='h-screen w-screen flex items-center justify-center flex-col'>
        <LoaderIcon className='animate-spin text-4xl text-primary' />
        <p>Loading...</p>
      </div>
    )
  }

  if (!brand) {
    router.push('/')
  }

  const themes: Record<Theme, React.ReactNode> = {
    basic: (
      <div className="h-screen w-screen max-h-screen overflow-y-auto lg:px-6 rounded-none! py-0!">
        <div className='md:max-w-xl mx-auto'>
          <BasicFormPreview event={event} />
        </div>,
      </div>
    ),
    classic: <div className='h-screen w-screen flex items-center justify-center flex-col text-5xl font-extrabold'>Classic theme</div>
  }

  if (brand) {
    return (
      <div>
        {themes[event.theme.name]}
      </div>
    )
  }
}

export default Page