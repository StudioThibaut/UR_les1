export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Portfolio</h1>
      <p className="text-gray-700">
        Welkom op mijn portfolio. Als gedreven creatieveling combineer ik een scherp fotografisch oog met een hands-on aanpak in grafisch ontwerp. Mijn werk kenmerkt zich door een zoektocht naar structuur, ritme en visuele impact — of dat nu in de verstilling van architectuurfotografie is of in de dynamiek van een commercieel merk.
      </p>

       <a href="/Fotografie" className="hover:underline">Fotografie</a>
       <br />
       <a href="/T-shirt" className="hover:underline">Stage T-shirt Heylen Vastgoed WeGi</a>
       <br />
       <a href="/EnergyDrink" className="hover:underline">Energy Drink</a>
    </div>
  )
}
