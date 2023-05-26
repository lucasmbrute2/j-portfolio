import { InstagramIcon } from 'lucide-react'
import { ContactMeForm } from '../form'
import wpp from '../../assets/wpp.svg'
import { ImageWindow } from '../img-window'

export function ContactMe() {
  return (
    <section id="contactMe" className="p-[64px]">
      <h1 className="text-[min(96px,9vw)] font-bold text-secondary lg:leading-xl">
        Vamos juntos ?
      </h1>
      <ContactMeForm className="mt-10 w-full lg:mt-16" />

      {/* Social medias */}
      <div className="flex  justify-between py-5">
        <div className="relative h-[60px] w-[60px] rounded-full bg-cta-button">
          <InstagramIcon
            size={40}
            className="absolute left-1/2 top-1/2 z-10   -translate-x-1/2 -translate-y-1/2  text-secondary"
          />
        </div>

        <div className="relative h-[60px] w-[60px] rounded-full bg-cta-button">
          <ImageWindow
            src={wpp}
            className="absolute left-1/2 top-1/2  z-10 w-[35px] -translate-x-1/2 -translate-y-1/2 text-gray-950"
          />
        </div>
      </div>
    </section>
  )
}
