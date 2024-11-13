import { AiFillCode } from "react-icons/ai";
import { MdDevicesOther } from "react-icons/md";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className="relative">
      <Reveal>
        <div className="mb-6">
          <h4 className="flex items-center mb-6">
            <AiFillCode size="2.4rem" className="text-brand" />
            <span className="text-md font-bold ml-2">My Technologies</span>
          </h4>
          <div className="flex flex-wrap gap-3 mb-12">
            <span className="chip">JavaScript</span>
            <span className="chip">TypeScript</span>
            <span className="chip">Python</span>
            <span className="chip">C++</span>
            <span className="chip">Rust</span>
            <span className="chip">HTML</span>
            <span className="chip">CSS</span>
            <span className="chip">SCSS</span>
            <span className="chip">Tailwind</span>
            <span className="chip">React</span>
            <span className="chip">NextJs</span>
            <span className="chip">Redux</span>
            <span className="chip">Redis</span>
            <span className="chip">NodeJS</span>
            <span className="chip">Express</span>
            <span className="chip">MongoDB</span>
            <span className="chip">MySql</span>
            <span className="chip">Docker</span>
            <span className="chip">Prisma</span>
            <span className="chip">Kubernetes</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className="mb-6">
          <h4 className="flex items-center mb-6">
            <MdDevicesOther size="2.4rem" className="text-brand" />
            <span className="text-md font-bold ml-2">Others</span>
          </h4>
          <div className="flex flex-wrap gap-3 mb-12">
            <span className="chip">Linux</span>
            <span className="chip">Vs Code</span>
            <span className="chip">Git</span>
            <span className="chip">Github</span>
            <span className="chip">Vercel</span>
            <span className="chip">Netlify</span>
            <span className="chip">Railway</span>
            <span className="chip">Postman</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};