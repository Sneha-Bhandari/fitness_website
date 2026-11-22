import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: MapPin,
      title: "Our Location",
      value: "Gorkha Physical Fitness Training Center, Nepal",
      link: null,
    },
    {
      icon: Phone,
      title: "Phone Number",
      value: "+977 98XXXXXXXX",
      link: "tel:+97798XXXXXXXX",
    },
    {
      icon: Mail,
      title: "Email Address",
      value: "info@gorkhatraining.com",
      link: "mailto:info@gorkhatraining.com",
    },
    {
      icon: Clock,
      title: "Training Hours",
      value: "Sunday – Friday | 6:00 AM – 6:00 PM",
      link: null,
    },
  ];

  return (
    <div className="relative h-full bg-footer p-8 sm:p-10 lg:p-12 overflow-hidden">

      <div className="relative z-10">

        {/* Heading */}
        <span className="text-secondary text-xs font-semibold uppercase tracking-[3px]">
          Contact Information
        </span>

        <h3 className="text-white text-2xl sm:text-2xl font-medium mt-4">
          We'd Love to Hear From You
        </h3>


        {/* Contact Details */}
        <div className="space-y-7 mt-10">
          {contactDetails.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} className="flex items-start gap-4">

                <div className="w-8 h-8 shrink-0 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-secondary">
                  <Icon size={18} />
                </div>

                <div>
                  <h4 className="text-white font-medium text-sm">
                    {item.title}
                  </h4>

                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-white/60 text-xs mt-1 block hover:text-secondary transition-colors break-all"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white/60 text-xs mt-1 leading-6">
                      {item.value}
                    </p>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-white/15">

          <h4 className="text-white font-semibold mb-5">
            Follow Us
          </h4>

          <div className="flex items-center gap-3">

            <a
              href="#"
              aria-label="Facebook"
              className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-secondary hover:text-footer transition-all"
            >
             <FaFacebook size={20} />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-secondary hover:text-footer transition-all"
            >
             <FaInstagram size={20}/>
            </a>

            <a
              href="#"
              aria-label="WhatsApp"
              className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-secondary hover:text-footer transition-all"
            >
             <FaWhatsapp size={20}/>
            </a>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactInfo;
