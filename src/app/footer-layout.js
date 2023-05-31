import Image from "next/image";

const Footer = () => {
  return (
  <footer>
    <div className="footer mt-20">
      <Image
        className="ml-32"
        width={103}
        height={162}
        src="/Bricktop 3.png"
        alt=''
      >
      </Image>
      <Image
        className="sm:block hidden"
        width={1700}
        height={700}
        src="/Group 25.png"
        alt=""
      >
      </Image>
      <Image
        className="sm:hidden block"
        width={768}
        height={50}
        src="/Group 146.jpg"
        alt=""
      >
      </Image>
      <div className="socials bg-[#242424] py-4 flex justify-between">
        <div className="fmi font-medium text-[20px] ml-12">
          <p>@2023 BrickLayer</p>
        </div>
        <div className="fmi font-medium text[20px] flex mr-12">
          <Image
            className="mr-6"
            width={18}
            height={16}
            alt=""
            src="/Vector (1).svg"
          >
          </Image>
          <Image
            className="mr-6"
            width={18}
            height={16}
            alt=""
            src="/tabler-icon-brand-linkedin.svg"
          >
          </Image>
          <Image
            className=""
            width={18}
            height={16}
            alt=""
            src="/Vector (2).svg"
          >
          </Image>
        </div>
      </div>
    </div>
   </footer>
  )
}

export default Footer;