import Image from "next/image";
import Counter from "../../components/counter";
export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <h1 className="text-5xl font-bold mb-8 text-red-60 mt-10">ABOUT US</h1>
      <div className="relative w-full flex flex-col items-center ">
        <div>
          <Image
            src="/group.jpg"
            alt="Image"
            width={600}
            height={500}
            objectFit="cover"
            className="rounded-xl transition-transform duration-300 hover:scale-105"
          />
        </div> 
        <Counter />
        <div className="mainabout__box w-full flex mt-4">
        
          <div className=" text-center ml-8 mr-8 lg:text-left aboutContainer">
            <p className="text-black mb-4 text-xl font-thin">
              We came together over a shared excitement about building a product
              that could solve our own problem of where our next favourite hack
              is coming from. But also a product that helps everyone thrive in
              this market: from founders and engineers to companies and
              investors.
            </p>
            <p className="text-black mb-4 text-xl font-thin">
              Stellar is a product that connects people around the topics and
              ideas that fascinate them.{" "}
              <span className="font-semibold">
                The idea that we can use technology to take our experience
              </span>
              , as security lovers, to a new dimension and leave the computer
              industry in better shape while {"we're"} at it.
            </p>
            <p className="text-black mb-4 text-xl font-thin">
              You can dive into the atoms that make up a product, share the
              moments that move you and discuss the ideas you find compelling.
              We want to create a ground for{" "}
              <span className="font-semibold">
                discussion and bring knowledge together
              </span>
              , while making it more accessible and easier to grasp.
            </p>
            <p className="text-black text-xl font-thin">
              Contrary to popular belief, this product is not random security.
              It has roots in a piece of classical literature, making it over 5
              years old. Richard McClintock, a professor at Hampden-Sydney
              College in Virginia, looked up one of the more obscure words,
              consectetur from a passage, and going through the cites of the
              word in classical literature, discovered the source.
            </p>
            <div className="border shadow-xl rounded-xl p-4 my-6 transition-transform duration-300 hover:scale-105">
              <h1 className="text-4xl font-bold my-4 text-red-60">Mission</h1>
              <p className="text-black text-xl font-thin">
                To ignite the potential of engineering students by providing
                cutting-edge resources, hands-on experiences, and a vibrant
                community, driving innovation and shaping the future of
                technology.
              </p>
            </div>
            <div className="border shadow-xl rounded-xl p-4 my-6 transition-transform duration-300 hover:scale-105">
              <h1 className="text-4xl font-bold my-4 text-red-60">Vision</h1>
              <p className="text-black text-xl font-thin">
                To be the ultimate launchpad for engineering students, inspiring
                them to push boundaries, create groundbreaking solutions, and
                lead the way in the ever-evolving world of technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
