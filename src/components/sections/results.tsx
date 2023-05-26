import { ArrowDown } from 'lucide-react'
import { Carousel } from '../carousel'
import Image from 'next/image'
import { Link } from 'react-scroll'

const profiles = [
  {
    id: 1,
    name: 'Jonathan',
    age: 27,
    img: require('../../assets/profiles/jonathan.svg'),
  },
  {
    id: 2,
    name: 'Jonathan',
    age: 27,
    img: require('../../assets/profiles/jonathan@v2.svg'),
  },
  {
    id: 3,
    name: 'Lucas Andrade',
    age: 27,
    img: require('../../assets/profiles/andrade.svg'),
  },
  {
    id: 4,
    name: 'Pedro Henrique',
    age: 26,
    img: require('../../assets/profiles/pedro.svg'),
  },
]

export function Results() {
  return (
    <section className="block bg-[#fffffff3] pt-12 ">
      <div className="ml-5 flex max-w-full flex-col items-center justify-around lg:ml-28 lg:h-[1300px]">
        <h1
          className={`text-center text-[min(96px,10vw)] font-bold leading-[112px] text-primary lg:text-start`}
        >
          Resultados
          <hr className="mx-auto my-[-15px] h-1 w-8 rounded border-0 bg-purple-700 lg:my-3 lg:w-24 " />
        </h1>
        <Link
          to="contactMe"
          className={` mt-10 flex cursor-pointer flex-col items-center justify-center gap-4 pb-5 font-poppins text-lg`}
          smooth
        >
          <p>Entre em contato!</p>
          <ArrowDown className="animate-bounce" />
        </Link>

        <div className="flex max-w-full  overflow-x-hidden">
          <Carousel loop className=" h-[400px] lg:h-[900px]">
            {profiles.map(({ age, id, img, name }) => (
              <div
                key={id}
                className="relative mr-16 mt-11 flex h-64 flex-[0_0_30%] flex-col items-center"
              >
                <div>
                  <Image src={img} alt="" className="w-100" />

                  <div className="mt-10 flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center">
                      <p className="text-lg text-primary">{name},</p>
                      <span className="text-primary">{age} anos</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  )
}
