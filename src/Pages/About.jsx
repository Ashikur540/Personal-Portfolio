import aboutImg from "../Assets/Image/IMG_3055.jpg";


export const About = () => {
    return (
        <section id="about" className="mt-10 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <h1 className="text-2xl md:text-4xl font-semibold text-center my-8 text-white">About me</h1>
            <div className="flex flex-col items-center justify-between lg:flex-row">
                <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
                    <div className="max-w-xl mb-6">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                                Brand new
                            </p>
                        </div>
                        <p className="text-base text-white md:text-lg">
                            My name is Ashkur Rahman.My home town is Bogura.Curently, I am studting  <b>software Engineering</b> in Daffofil international univarsity.{" "}Building new things is always my passion and coding sprinkles an extra falvour on it.It gives a much pleasure when i solve someones problem through my knowledge.
                            <br />
                            I love to watch movies specially korean drama series.Beside, I also love drawing,painting and photography.I love to keep things simple be simple🤍.

                        </p>
                    </div>

                </div>
                <div className="relative lg:w-1/2">
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                        src={aboutImg}
                        alt=""
                    />
                </div>
            </div>
        </section>
    );
};