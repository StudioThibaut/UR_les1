export default function StageTshirtPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Hero / Titel sectie */}
        <section className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            STAGE T-SHIRT HEYLEN VASTGOED WEGI
          </h1>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Voor de sportclub Heylen Vastgoed WeGi mocht ik het ontwerp verzorgen voor de officiële T-shirts van hun jaarlijkse volleybalstage. Een opdracht waarbij de balans tussen sportiviteit, clubidentiteit en de zichtbaarheid van de sponsor centraal stond.
          </p>
        </section>

        {/* Grid sectie: tekst + (optioneel) afbeeldingen */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Tekst */}
          <div className="flex flex-col space-y-4">
            <p className="text-gray-700 leading-relaxed">
              De uitdaging was het creëren van een ontwerp dat gedragen wordt door een hele club vraagt om een duidelijke en krachtige uitstraling. De uitdaging lag in het samenbrengen van de verschillende logo's en de kampsfeer in één samenhangend grafisch geheel dat technisch goed drukbaar was op sportkledij.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Tijdens dit project heb ik nauw samengewerkt met de organisatie. Het proces was een intensieve oefening in iteratief ontwerpen:
            </p>

            {/* Lijst met punten */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  Feedback verwerken: Het ontwerp was niet direct definitief. Door goed te luisteren naar de wensen van de club, heb ik meerdere revisierondes doorlopen.
                </li>
                <li>
                  Detailwerk: Ik heb veel aandacht besteed aan kleine aanpassingen in de compositie en verhoudingen. Telkens opnieuw finetunen zorgde ervoor dat het ontwerp steeds sterker werd.
                </li>
                <li>
                  Doorzettingsvermogen: Juist door te blijven schaven tot elk detail klopte, kon ik een resultaat afleveren dat volledig voldeed aan de verwachtingen van de opdrachtgever.
                </li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Waardoor het resultaat een professioneel en herkenbaar shirt dat de teamgeest tijdens de stage versterkte. Dit project heeft mijn vaardigheden in klantcommunicatie en het werken met strakke grafische kaders verder aangescherpt.
            </p>
          </div>

          {/* Grote afbeelding van de T-shirt */}
          <div className="h-[32rem] w-full bg-gray-300 rounded-lg flex items-center justify-center text-gray-500 row-span-2" >
            Stage T-shirt Ontwerp
          </div>
        </section>

      </div>
    </div>
  )
}