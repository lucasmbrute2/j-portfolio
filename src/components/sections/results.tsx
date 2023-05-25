import { Carousel } from '../carousel'
import Image from 'next/image'

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
    <div className="bg-secondary-background-color pt-12">
      <div className="ml-5 max-w-full lg:ml-28">
        <h1
          className={`text-center text-[min(85px,10vw)] font-bold leading-[112px] text-primary lg:text-start`}
        >
          Resultados
        </h1>

        <div className="flex max-w-full overflow-x-hidden">
          <Carousel loop className="h-[700px]">
            {profiles.map(({ age, id, img, name }) => (
              <div
                key={id}
                className="relative mr-16 mt-11 flex h-64 flex-[0_0_30%] flex-col items-center"
              >
                <div>
                  <Image src={img} alt="" className="w-100" />

                  <div className="mt-10 flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center">
                      <p className="text-lg font-bold">{name},</p>
                      <span>{age} anos</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}
