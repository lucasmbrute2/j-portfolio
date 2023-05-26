import { ImageWindow } from '../img-window'
import me from '../../assets/me.svg'
import { Qualifications } from './qualifications'

export function AboutMeSection() {
  return (
    <section
      id="aboutMe"
      className="block bg-[#fffffff3] pb-5 pt-16 lg:min-h-[90vh]"
    >
      <div className="mx-auto max-w-max-w-screen-1.5xl py-36 lg:py-0">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <ImageWindow
            src={me}
            height="h-[456px]"
            className="w-[350px] lg:w-[500px]"
          />
          <div className="relative w-full px-4 text-center text-primary lg:w-[504px] lg:px-0 lg:text-left">
            <h1 className=" text-[min(85px,10vw)] font-bold leading-[112px]">
              Sobre mim
            </h1>
            <p className="text-[25px]  leading-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur necessitatibus exercitationem nam possimus corrupti
              quam facilis, iusto praesentium quasi nesciunt, dolorum
              voluptatibus soluta quibusdam ullam beatae sequi aperiam molestias
              ea.
            </p>
            {/* Blur */}
            <div className="absolute right-[1%] top-5 z-50 hidden h-[300px] w-[555px] rounded-full bg-purple-700 opacity-20 blur-2xl lg:block" />
          </div>
        </div>
        <Qualifications />
      </div>
    </section>
  )
}
