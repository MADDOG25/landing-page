export default function Testimonials() {
  return (
    <section className="relative isolate overflow-hidden bg-purpleLight px-6 py-24 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-purpleSoft shadow-xl shadow-indigo-600/10 ring-1 ring-grayLight sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-x-12">
        <figure className="mt-10">
          <blockquote className="text-center text-base font-semibold text-purpleDark sm:text-2xl/9">
            <p>
              “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              expedita voluptas culpa sapiente alias molestiae. Numquam corrupti
              in laborum sed rerum et corporis.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              alt="imagen de testimonio de cliente"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="mx-auto h-10 w-10 rounded-full"
            />
            <div className="mt-4 flex items-center justify-center text-center gap-x-4 text-base">
              <div className="font-semibold text-purpleDark">Judith Black</div>
              <div className="text-purpleDark">CEO of Workcation</div>
            </div>
          </figcaption>
        </figure>
        <figure className="mt-10">
          <blockquote className="text-center text-base font-semibold text-purpleDark sm:text-2xl/9">
            <p>
              “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              expedita voluptas culpa sapiente alias molestiae. Numquam corrupti
              in laborum sed rerum et corporis.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              alt="imagen de testimonio de cliente"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="mx-auto h-10 w-10 rounded-full"
            />
            <div className="mt-4 flex items-center justify-center text-center gap-x-4 text-base">
              <div className="font-semibold text-purpleDark">Judith Black</div>
              <div className="text-purpleDark">CEO of Workcation</div>
            </div>
          </figcaption>
        </figure>
        <figure className="mt-10">
          <blockquote className="text-center text-base font-semibold text-purpleDark sm:text-2xl/9">
            <p>
              “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              expedita voluptas culpa sapiente alias molestiae. Numquam corrupti
              in laborum sed rerum et corporis.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              alt="imagen de testimonio de cliente"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="mx-auto h-10 w-10 rounded-full"
            />
            <div className="mt-4 flex items-center justify-center text-center gap-x-4 text-base">
              <div className="font-semibold text-purpleDark">Judith Black</div>
              <div className="text-purpleDark">CEO of Workcation</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
