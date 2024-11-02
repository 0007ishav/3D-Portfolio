import Globe from "react-globe.gl";
import Button from "../components/Button";
import { useEffect, useRef, useState } from "react";

const About = ({ contactRef }) => {
    const globeRef = useRef();

    useEffect(() => {
      const latitude = 20.5937;
      const longitude = 78.9629;
  
      if (globeRef.current) {
        globeRef.current.pointOfView({ lat: latitude, lng: longitude, altitude: 1.7 }, 1000);
      }
    }, []);
    
    const [hasCopied, setHasCopied] = useState(false)
    const handleCopy = () => {
        navigator.clipboard.writeText('workwithishav@gmail.com')
        setHasCopied(true)

        setTimeout(() => {
            setHasCopied(false)
        }, 2000);
    }
  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Hi, I'm Ishav</p>
              <p className="grid-subtext">
                With 2 years of experience, I have honed my skills in both
                frontend and backend development, specializing in building
                user-focused applications. I’m skilled in ServiceNow
                customization and scripting, along with full-stack web
                development.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
            <div className="grid-container">
                <img src="/assets/mygridBG.png" alt="grid-2" className="w-full sm:w-[276px] h-fit object-contain" />

                <div>
                    <p className="grid-headtext">Tech Stack</p>
                    <p className="grid-subtext">I specialize in JavaScript/TypeScript with a focus on React, Next.js & ServiceNow ecosystems.</p>
                </div>
            </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
            <div className="grid-container">
                <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                    <Globe 
                        ref={globeRef}
                        height={326}
                        width={326}
                        backgroundColor="rgba(0,0,0,0)"
                        backgroundImageOpacity={0.5}
                        showAtmosphere
                        showGraticules
                        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                        labelsData={[{
                            lat: 29.0588, lng: 76.0856,
                            text: "I'm here",
                            color: 'white',
                            size: 4000,
                        }]}
                    />
                </div>
                    <p className="text-sm text-white-500">Zoom in & try to find me where i am.</p>
                    <div>
                        <p className="grid-headtext">I work remotely across most timezones.</p>
                        <p className="grid-subtext">I'm based in Chandigarh, with remote work available.</p>
                        <Button
                            name='Contact Me'
                            isBeam
                            containerClass="w-full mt-10"
                            contactRef={contactRef}
                        />
                    </div>
            </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
            <div className="grid-container">
                <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain"/>

                <div>
                    <p className="grid-headtext">My Passion for Coding</p>
                    <p className="grid-subtext">I love solving problems and building innovative solutions through code. Coding isn’t just my profession; it is my passion. It drives me to constantly learn, grow, and create impactful applications that enhance user experiences.</p>
                </div>
            </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
            <div className="grid-container">
                <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-full object-cover sm:object-top" />

                <div className="space-y-2">
                    <p className="grid-subtext text-center">Contact Me</p>
                    <div className="copy-container" onClick={handleCopy}>
                            <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                            <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">workwithishav@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;