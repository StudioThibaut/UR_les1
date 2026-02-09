export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">About Us</h1>
      <p className="text-gray-700">
        We are a company dedicated to providing the best solutions for your needs. 
        Our team is passionate about creating modern, scalable, and user-friendly applications.
      </p>
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li>Innovative technology</li>
        <li>Professional team</li>
        <li>Customer satisfaction</li>
      </ul>

      {/* 2 columns */}
      <div className="flex flex-col md:flex-row gap-6 pt-6">
        <div className="flex-1 bg-gray-100 p-4 rounded-lg">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="flex-1 bg-gray-100 p-4 rounded-lg">
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse 
            cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>

      {/* 2 rows */}
      <div className="grid gap-6 pt-6">
        <div className="bg-gray-100 p-4 rounded-lg">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <p>
            Sed nisi. Nulla quis sem at nibh elementum imperdiet. 
            Duis sagittis ipsum. Praesent mauris.
          </p>
        </div>
      </div>
    </div>
  )
}
