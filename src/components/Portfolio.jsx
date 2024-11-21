export default function Portfolio() {
  return (
    <div className="bg-gray-50 py-20 pb-48">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-purpleSoft">
          Trabajos
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight tetext-purpleSoft sm:text-5xl">
          Soluciones aplicadas
        </p>

        {/* Articulo moviles */}
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-2">
          <div className="relative lg:row-span-2">
            {/* Color de fondo */}
            <div className="absolute inset-px rounded-lg bg-purpleLight p-6 lg:rounded-l-[2rem]"></div>

            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              {/* Textos moviles */}
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10 text-purpleDark ">
                <p className="mt-2 text-xl font-semibold tracking-tight max-lg:text-center">
                  Compativilidad con Móviles
                </p>
                <p className="mt-2 max-w-lg text-base max-lg:text-center">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo.
                </p>
              </div>
              {/* Imagen moviles */}
              <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                  <img
                    className="size-full object-cover object-top"
                    src="https://tailwindui.com/plus/img/component-images/bento-03-mobile-friendly.png"
                    alt="imagen de portfolio moviles"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Articulo optimizacion */}
          <div className="relative max-lg:row-start-1">
            {/* Color de fondo */}
            <div className="absolute inset-px rounded-lg bg-purpleLight max-lg:rounded-t-[2rem]"></div>

            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              {/* Textos optimizacion */}
              <div className="px-8 pt-8 sm:px-10 sm:pt-10 text-purpleDark ">
                <p className="mt-2 text-xl font-semibold tracking-tight max-lg:text-center">
                  Optimización
                </p>
                <p className="mt-2 max-w-lg text-base  max-lg:text-center">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit
                  maiores impedit.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                <img
                  className="w-full max-lg:max-w-xs"
                  src="https://tailwindui.com/plus/img/component-images/bento-03-performance.png"
                  alt="imagen de optimizacion"
                />
              </div>
            </div>
          </div>
          {/* Articulo seguridad */}
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            {/* Color de fondo */}
            <div className="absolute inset-px rounded-lg bg-purpleLight"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10 text-purpleDark ">
                <p className="mt-2 text-xl font-semibold tracking-tight max-lg:text-center">
                  Seguridad
                </p>
                <p className="mt-2 max-w-lg text-base  max-lg:text-center">
                  Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                  suspendisse semper morbi.
                </p>
              </div>

              <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                <img
                  className="h-[min(152px,40cqw)] object-cover object-center"
                  src="https://tailwindui.com/plus/img/component-images/bento-03-security.png"
                  alt="imagen de seguridad"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
