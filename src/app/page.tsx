import { CtaButton } from '@/components/cta-button'
import { poppins } from './layout'

export default function Home() {
  return (
    <>
      <div className="relative h-[calc(100%-80px)] bg-[url(../assets/hero-banner.png)] bg-cover bg-center bg-no-repeat mix-blend-luminosity blur-sm" />
      <div className="absolute right-0 top-[50%] mr-9 w-[560px] translate-y-[-50%] brightness-100">
        <h1
          className={`${poppins.className} my-4 text-3xl leading-8 text-secondary`}
        >
          Jonathan Rodrigues - Personal
        </h1>
        <h2 className="text-8xl font-bold leading-[112px] text-secondary">
          Encontre sua força
        </h2>

        <CtaButton
          className={`${poppins.className} my-[65px] h-[78px] w-[555px] rounded bg-cta-button text-center text-4xl font-normal leading-10 text-gray-200 hover:text-gray-50`}
        >
          tenho interesse
        </CtaButton>
      </div>
    </>
  )
}
