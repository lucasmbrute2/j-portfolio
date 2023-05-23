const sections = ['home', 'sobre mim', 'resultados', 'contatos']

export default function Header() {
  return (
    <header className="w-full bg-white">
      <ul className="flex items-center justify-around py-7">
        {sections.map((section, i) => (
          <li key={i} className="cursor-pointer font-sans font-bold uppercase">
            {section}
          </li>
        ))}
      </ul>
    </header>
  )
}
