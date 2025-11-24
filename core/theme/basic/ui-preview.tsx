'use client'
import { BasicRegistration } from "@/core/forms/registration/basic-registration"
import { Calendar, Clock, MapPinIcon } from "lucide-react"
import Image from "next/image";
import React from "react"
import Marquee from 'react-fast-marquee';
import { BasicFormData } from "./types";

interface BasicFormPreviewProps {
  event: BasicFormData
}
const BasicFormPreview = ({ event }: BasicFormPreviewProps) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="">
      <div className="flex-1 h-full  pb-28">
        <img
          src={event.banner_image}
          alt="Image"
          className=" h-[230px] w-full object-cover dark:brightness-[0.2]"
        />

        <section className='p-5'>
          <h1 className=" text-xl font-semibold leading-tight tracking-tight md:text-3xl">
            {event.event_title}
          </h1>
          <p className="mx-auto max-w-2xl text-sm text-zinc-400 mt-5">
            {event.event_description}
          </p>

          <section>
            <div className="flex items-center  gap-2 mt-5" >
              <div className="h-8 w-8 p-2 text-sm font-bold rounded-md bg-muted flex items-center justify-center">
                <Calendar size={20} className="text-slate-400" />
              </div>
              <div className="">
                <p className="text-sm text-zinc-500 font-medium">
                  {event.event_date}
                </p>
              </div>
            </div>
            <div className="flex items-center mt-2 gap-2" >
              <div className="h-8 w-8 p-2 text-sm font-bold rounded-md bg-muted flex items-center justify-center">
                <Clock size={20} className="text-slate-400" />
              </div>
              <div className="">
                <p className="text-sm text-zinc-500 font-medium">
                  {event.event_start_time} - {event.event_end_time}
                </p>
              </div>
            </div>
            <div className="flex items-center mt-2 gap-2" >
              <div className="h-8 w-8 p-2 text-sm font-bold rounded-md bg-muted flex items-center justify-center">
                <MapPinIcon size={20} className="text-slate-400" />
              </div>
              <div className="">
                <p className="text-sm text-zinc-500 font-medium">
                  {event.event_location}
                </p>
              </div>
            </div>
          </section>

          <section className='space-y-3 py-5'>
            <h1 className=" text-xl font-semibold leading-tight tracking-tight  md:text-xl">
              Partners
            </h1>
            <div className='  space-y-5'>
              <Marquee autoFill={true} direction='left' gradientWidth={100} gradient={true} speed={40} className='flex gap-5'>
                {event.partners.map((_, idx) => (
                  <Image alt="partners" width={1200} height={100} src={`/p.png`} key={idx} className='space-y-2 h-20 w-[90px] ml-3' />
                ))}
              </Marquee>
            </div>
          </section>

          <section className='space-y-3 mt-5'>
            <h1 className=" text-xl font-semibold leading-tight tracking-tight  md:text-xl">
              Speakers
            </h1>
              <div className="flex items-center mt-2 gap-2">
                <div className="h-10 w-10 text-sm font-bold rounded-md bg-muted flex items-center justify-center">
                  eL
                </div>
                <div className="">
                  <p className="text-sm text-zinc-400">
                    Host
                  </p>
                  <p className="text-sm text-zinc-500 font-medium">
                    {event.host}
                  </p>
                </div>
                </div>
            {event.speakers.map((speaker, idx) => (
              <div className="flex items-center mt-2 gap-2" key={speaker + idx}>
                <div className="h-10 w-10 text-sm font-bold rounded-md bg-muted flex items-center justify-center">
                  {speaker.split(' ').map((name) => name[0]).join('').slice(0, 2)}
                </div>
                <div className="">
                  <p className="text-sm text-zinc-400">
                    Speakers
                  </p>
                  <p className="text-sm text-zinc-500 font-medium">
                    {speaker}
                  </p>
                </div>
              </div>
            ))}
          </section>

          <section className="py-5 space-y-3">
            <h1 className=" text-xl font-semibold leading-tight tracking-tight  md:text-xl">
              Program Outline
            </h1>
            {event.event_outline.map((outline, index) => (
              <div key={index} className="flex mt-1 " >
                <div className="flex-col p-2 text-sm font-bold bg-primary flex items-center justify-center">
                  <Clock size={20} className=" text-white" />
                  <p className="text-sm font-medium text-white">
                    {outline.time}
                  </p>
                </div>
                <div className="bg-muted text-white flex items-center flex-1 px-3">
                  <p className="text-sm text-zinc-500 font-medium">
                    {outline.title}
                  </p>
                </div>
              </div>
            ))}
          </section>

        </section>
      </div>

      <section className='absolute z-50 max-w-xl mx-auto bottom-0 left-0 right-0 px-5 pb-5 pt-10 bg-linear-to-t from-white via-white  to-transparent'>
        <button onClick={() => setIsOpen(true)} className='bg-foreground mx-auto w-full text-background px-4 py-3.5 rounded-full mt-5'>
          Register Now
        </button>
        <p className="mx-auto text-center text-base text-zinc-400 animate-pulse">
          Powered by <span className="text-primary">eLaunch</span>
        </p>
        <BasicRegistration isOpen={isOpen} setIsOpen={setIsOpen} />
      </section>
    </div>
  )
}

export default BasicFormPreview
