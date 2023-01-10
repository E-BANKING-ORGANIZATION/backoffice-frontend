import homeImage from "../../assets/images/home.png";
import { GeneralNavar } from "./GeneralNavbar";
export const GeneralHome = () => {
  return (
    <>
      <GeneralNavar></GeneralNavar>
      <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-20 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16  ">
            <h1
              className="tracking-tight mt-0 text-gray-900"
              style={{
                fontFamily: "Playfair Display",
                fontStyle: "normal",
              }}
            >
              <span className="block xl:inline font-normal md:text-8xl text-6xl">
                Découvrez{" "}
              </span>
              <br />
              <span className="text-6xl">
                le monde de <br />
              </span>{" "}
              <span className="block text-blue-800 xl:inline text-6xl">
                Ebanking
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              gerer les transaction
              <br />
              de votre client en ligne.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start"></div>
          </div>
        </div>
        <div className="relative w-full mt-10 h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img
            className=" w-full my-auto mx-auto inset-0 object-cover"
            src={homeImage}
            alt=""
          />
        </div>
      </main>
    </>
  );
};
