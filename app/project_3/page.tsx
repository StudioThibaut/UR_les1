export default function EnergyDrinkPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Hero / Titel sectie */}
        <section className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            IGNITION
          </h1>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Voor deze schoolopdracht was het de uitdaging om een compleet nieuw merk voor een energiedrank op de kaart te zetten: Ignition. Het doel was om een visuele identiteit te creëren die kracht, snelheid en energie uitstraalt.
          </p>
        </section>

        {/* Grid sectie: tekst + afbeelding */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Tekst */}
          <div className="flex flex-col space-y-4">
            <p className="text-gray-700 leading-relaxed">
              De opdracht bestond uit het ontwikkelen van een integrale merkbeleving. Dit hield in:
            </p>

            {/* Lijst 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Logo Design: Het ontwerpen van een krachtig beeldmerk dat direct herkenbaar is.</li>
                <li>Packaging: Het vertalen van de huisstijl naar een 3D-object (het blikje).</li>
                <li>Advertising: Het creëren van een visueel sterke affiche om het product in de markt te zetten.</li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Bij het ontwerp van Ignition heb ik gezocht naar een balans tussen een modern, strak uiterlijk en de dynamiek die je bij een energiedrank verwacht.
            </p>

            {/* Lijst 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Typografie & Kleur: Ik heb gekozen voor elementen die de naam 'Ignition' (ontsteking) ondersteunen, met een focus op een energieke uitstraling.</li>
                <li>Packaging Design: Bij het ontwerpen van het blikje hield ik rekening met hoe het logo en de grafische elementen zich om de ronde vorm van het metaal vouwen, zodat het merk vanuit elke hoek zichtbaar is.</li>
                <li>De Affiche: Voor de promotie heb ik een compositie gemaakt waarbij het product centraal staat, ondersteund door visuele effecten die de 'boost' van de drank benadrukken.</li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Het resulteerde tot een samenhangende branding waarbij het logo, het blikje en de affiche één sterk verhaal vertellen. Dit project heeft mijn vaardigheden in zowel brand identity als packaging design naar een hoger niveau getild.
            </p>
          </div>

          {/* Afbeeldingen / Mockups */}
          <div className="grid grid-cols-1 gap-4">
            {/* Hier kan je één groot vlak maken zoals bij stage t-shirt */}
            <div className="h-[32rem] w-full bg-gray-300 rounded-lg flex items-center justify-center text-gray-500 row-span-2">
              Energy Drink Mockup
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
