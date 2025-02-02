import React from "react";
import { socialMedia } from "@/data";

type Props = {};

const FooterNoContact = (props: Props) => {
    return (
        <footer className="w-full md-[100px] pb-10 md:mb-5" id="contact">
            {/* <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div> */}
            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light">
                    &copy; {new Date().getFullYear()} Toxic Development. All rights reserved.
                </p>
                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map((profile) => (
                        <a href={profile.link} target={"_blank"} key={profile.id}>
                            <div
                                key={profile.id}
                                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                            >
                                <img src={profile.img} alt={""} width={20} height={20} />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default FooterNoContact;