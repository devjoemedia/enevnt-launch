export interface EventOutline {
  time: string
  title: string
}

export interface BasicFormData {
  event_title: string
  event_description: string
  event_location: string
  event_date: string
  event_start_time: string
  event_end_time: string
  banner_image: string
  logo: string
  host: string
  speakers: string[]
  partners: string[]
  event_outline: EventOutline[]
}