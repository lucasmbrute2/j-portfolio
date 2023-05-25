import { CtaButton } from '@/components/cta-button'
import { poppins } from './layout'
import { AboutMeSection } from '@/components/sections/about-me'
import { Results } from '@/components/sections/results'
import { ContactMe } from '@/components/sections/contact-me'

export default function Home() {
  return (
    <>
      <div className="relative h-[calc(100%-80px)] bg-[url(../assets/hero-banner.svg)] bg-cover bg-center bg-no-repeat mix-blend-luminosity blur-sm" />

      <div className="mt-[-32rem] flex w-[360px] max-w-md flex-col px-4  brightness-100 lg:absolute lg:right-40 lg:top-[50%] lg:mr-9 lg:mt-0 lg:w-[504px] lg:translate-y-[-50%]">
        <h1 className="mb-4 text-[min(85px,14vw)] font-bold leading-[60px] text-secondary lg:leading-[95px]">
          Encontre sua força
        </h1>
        <h2
          className={`${poppins.className} my-4leading-8  mb-2 text-[min(30px,6vw)] text-secondary`}
        >
          Jonathan Rodrigues,<span className="block text-[18px]">Personal</span>
        </h2>

        <CtaButton
          className={`${poppins.className} my-[65px] rounded bg-[#388ee4] p-4 text-center text-[min(36px,6vw)] font-normal leading-10 text-gray-200 hover:text-gray-50 lg:h-[78px] lg:w-[555px]`}
        >
          tenho interesse
        </CtaButton>
      </div>

      <AboutMeSection />
      <Results />
      <ContactMe />
    </>
  )
}
