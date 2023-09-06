import SectionTitle from "./SectionTitle"
import {AiFillDatabase} from "react-icons/ai"
import {SiPowerbi} from "react-icons/si"

const About = () => {
  return (
    <section id="about" className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8">
        <SectionTitle title="About Me" titleNo="01"/>
        <div className="flex flex-col lgl:flex-row gap-16">
          <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
            <p>Hello! My name is Salman Ahmad and I enjoy working with data. My interest in data analytics started back in 2019 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
            <p>Fast-forward to today, and I had the privilege of working at an advertising agency, a start-up,<span className="text-textGreen">a huge corporation, and a student-led design studio.</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rem accusantium fugiat veritatis, quidem repellat<span className="text-textGreen">ab natus possimus? Sint, accusamus!</span></p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem ullam eligendi dolorum nostrum possimus quos iusto magnam ut esse recusandae.</p>
            <p>Here are a few technologies I have been working with recently:</p>
            <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
              <li className="flex items-center gap-2">
                <span className="text-textGreen"><SiPowerbi/></span>Power BI
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen"><AiFillDatabase/></span>Teradata
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen"><SiPowerbi/></span>Power BI
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen"><AiFillDatabase/></span>Teradata
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen"><SiPowerbi/></span>Power BI
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen"><AiFillDatabase/></span>Teradata
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen"><SiPowerbi/></span>Power BI
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen"><AiFillDatabase/></span>Teradata
              </li>
            </ul>
          </div>
          <div></div>
        </div>
    </section>
  )
}

export default About