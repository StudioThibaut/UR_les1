export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Hero / Titel sectie */}
        <section className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            FOTOGRAFIE
          </h1>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            In het kader van een samenwerking met het FOMU (Fotomuseum Antwerpen), kreeg ik de opdracht om als 'junior creative' een fotografisch eerbetoon te brengen aan de gerenommeerde fotografe Hélène Binet. Het doel van dit project was om haar iconische stijl en werkwijze te doorgronden en deze te vertalen naar een eigen, unieke beeldenreeks.
          </p>
        </section>

        {/* Grid sectie: tekst + afbeeldingen */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Tekst */}
          <div className="flex flex-col space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Ik ben de stad Antwerpen ingetrokken om de interactie tussen licht, schaduw en architectuur vast te leggen. Mijn focus lag hierbij op het experimenteren met compositie, perspectief en beeldbewerking, waarbij lijnen als leidraad dienden om een verhaal te vertellen. Als overkoepelend thema heb ik gewerkt rond de tegenstellingen die lijnen kunnen vormen:
            </p>

            {/* Lijst met punten */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Ritmische en Statische lijnen: Het vangen van herhaling en rust in de architectuur.</li>
                <li>Lijn als verbinding en grens: Onderzoeken hoe structuren in de stad ons leiden of juist tegenhouden.</li>
                <li>Onregelmatige lijnen: Het vinden van abstracte patronen in imperfecties, zoals gebroken glas.</li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed">
              De uiteindelijke reeks is gepresenteerd in een zorgvuldig ontworpen leporello en een one-pager. De grootste uitdaging was de curatie en de compositie: bepalen waar elke foto moest staan zodat het ritme van de beelden ook over de vouwen van de leporello heen behouden bleef.
            </p>
          </div>

          {/* Afbeeldingen */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="h-64 w-full bg-gray-300 rounded-lg flex items-center justify-center text-gray-500 col-span-2 lg:col-span-2">
              Afbeelding 1
            </div>
            <div className="h-64 w-full bg-gray-300 rounded-lg flex items-center justify-center text-gray-500">
              Afbeelding 2
            </div>
            <div className="h-64 w-full bg-gray-300 rounded-lg flex items-center justify-center text-gray-500">
              Afbeelding 3
            </div>
            <div className="h-64 w-full bg-gray-300 rounded-lg flex items-center justify-center text-gray-500">
              Afbeelding 4
            </div>
            <div className="h-64 w-full bg-gray-300 rounded-lg flex items-center justify-center text-gray-500">
              Afbeelding 5
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}