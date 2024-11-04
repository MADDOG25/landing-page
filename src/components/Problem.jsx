export default function Problem() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col flex-nowrap lg:flex-row gap-10 justify-center lg:justify-between mx-auto lg:gap-x-4 px-2 lg:px-20 py-20">
          {/* Texts */}
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:text-left">
            <h2 className="text-balance text-3xl font-semibold tracking-normal text-purpleDark sm:text-4xl">
              ¿Estás cansado de que tu página web no refleje la esencia de tu
              negocio y aleje a tus clientes?
            </h2>
            <p className="mt-6 text-pretty text-lg/8 text-purpleDark">
              En Servicios 24/7, te presentamos el desafío de tener una página
              web que no solo atraiga la atención, sino que también convierta
              visitantes en clientes.
              <br />
              Ofreciendo servicios de creación de sitios web con las últimas
              tecnologías de frontend que harán brillar tu presencia en línea.
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#"
                className="rounded-md bg-purpleSoft px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Contáctanos
              </a>
            </div>
          </div>

          {/* Side image */}
          <div className="grid justify-center items-center px-4 pt-8">
            <img
              alt="App screenshot"
              src="/problem-image.svg"
              className="max-w-[30rem] w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
