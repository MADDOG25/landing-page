const people = [
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      alt: 'Fundador'
  },
  {
    name: "Jeffrey Morgan",
    role: "Founder",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      alt: 'Fundador'
  },
  {
    name: "Pepito Juan",
    role: "Desarrollador Frontend",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      alt: 'Desarrollador Frontend'
  },
  {
    name: "Harold Warren",
    role: "Desarrollador Backend",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      alt: 'Desarrollador Backend'
  },
];

export default function AboutUs() {
  return (
    <div className="bg-white py-32">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">

        <div className="max-w-xl">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Conoce a nuestro equipo
          </h2>
          <p className="mt-6 text-lg font-medium text-purpleSoft">
            Somos un grupo dinámico de personas apasionadas por lo que hacemos y
            dedicadas a ofrecer los mejores resultados a nuestros clientes.
          </p>
        </div>

        <ul
          role="list"
          className="mx-6 grid gap-x-40 gap-y-12 sm:grid-cols-2 sm:gap-y-16"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  alt={person.alt}
                  src={person.imageUrl}
                  className="size-16 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-purpleDark">
                    {person.name}
                  </h3>
                  <p className="text-sm font-medium text-purpleDark">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
