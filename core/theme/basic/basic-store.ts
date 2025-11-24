import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

import { BasicFormData } from './types'

export const defaultFormData: BasicFormData = {
  theme: {
    name: 'basic',
    name_friendly: 'Basic Theme',
  },
  event_title: 'eLaunch Grand Opening #1',
  event_description: 'Join us for the grand opening of eLaunc, where we will unveil the latest features and technologies in event management. Whether you are a seasoned event planner or just starting out, we have something for everyone. Come and experience the future of event management with us!',
  event_location: 'eLaunc Center, New York, NY',
  event_date: '2023-12-15',
  event_start_time: '10:00 AM',
  event_end_time: '6:00 PM',
  banner_image: '/1.png',
  logo: '',
  host: 'eLaunc LLC',
  speakers: [
    "MR. Joseph Nartey",
    "MR. Austine Eluro",
    "MRS. Lucy Thompson",
    "Madam. Adjibade Oluwaseun",
  ],
  partners: ['/p.png', '/p.png', '/p.png', '/p.png', '/p.png', '/p.png', '/p.png'],
  event_outline: [
    { time: '10:00', title: 'Welcome and Introduction' },
    { time: '11:00', title: 'Keynote Speech' },
    { time: '12:00', title: 'Lunch Break' },
    { time: '01:00', title: 'Session 1: Event Planning' },
    { time: '02:00', title: 'Session 2: Technology Showcase' },
    { time: '03:00', title: 'Networking and Closing' },
  ],
}

type BasicFormStore = {
  formData: BasicFormData
  addFormData: (data: BasicFormData) => void
}

export const useBasicFormStore = create<BasicFormStore>()(
  persist(
    (set, get) => ({
      formData: defaultFormData,
      addFormData: (data) => set({ formData: { ...get().formData, ...data } }),
    }),
    {
      name: 'basic-form-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)