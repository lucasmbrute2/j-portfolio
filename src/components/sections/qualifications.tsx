import { CourseCard } from '../course-card'
import sardinha from '../../assets/sardinha.svg'
import tecnicaBrutalidade from '../../assets/tecnica-brutalidade.svg'
import gluteos from '../../assets/glúteos.svg'
import treinamentoForca from '../../assets/treinamento-forca.svg'
import { Carousel } from '../carousel'

export function Qualifications() {
  return (
    <div className="relative pt-44">
      <Carousel loop className="flex-col overflow-hidden">
        <div className="flex-[0_0_70%] lg:flex-[0_0_30%] ">
          <CourseCard
            img={sardinha}
            name="Sardinha Evolution"
            category="curso"
            year={2018}
          />
        </div>
        <div className="flex-[0_0_70%] lg:flex-[0_0_30%] ">
          <CourseCard
            img={treinamentoForca}
            name="F5: Prescrição de exercícios para emagrecimento e hipertrofia"
            category="curso"
            year={2019}
          />
        </div>
        <div className="flex-[0_0_70%] lg:flex-[0_0_30%]">
          <CourseCard
            img={tecnicaBrutalidade}
            name="Técnica com Brutalidade curso 2021"
            category="curso"
            year={2021}
          />
        </div>

        <div className="flex-[0_0_70%] lg:flex-[0_0_30%] ">
          <CourseCard
            img={gluteos}
            name="Como construir o glúteo dos sonhos"
            category="workshop"
            year={2022}
          />
        </div>
      </Carousel>
    </div>
  )
}
