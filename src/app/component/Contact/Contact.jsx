import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const ContactInformation = () => {
  return (
    <section className="relative py-12 bg-[#f7f8f2] overflow-hidden">

   
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        <div className="text-center max-w-2xl mx-auto mb-14">

          <div className="inline-flex items-center gap-3 mb-5">
            <span className="w-9 h-0.5 bg-primary" />

            <span className="text-primary text-sm font-bold uppercase tracking-[3px]">
              Get In Touch
            </span>

            <span className="w-9 h-0.5 bg-primary" />
          </div>

          <h2 className="text-3xl sm:text-3xl md:text-3xl font-extrabold text-footer leading-tight">
            Let's Start a
            <span className="text-primary"> Conversation</span>
          </h2>

          <p className="text-gray-600 mt-2 leading-7 text-sm">
            Have questions about our training programs? We are here to
            help you take the first step toward your military career.
            Reach out to us today.
          </p>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 bg-white rounded-3xl overflow-hidden shadow-xl border border-primary/10">

          {/* Left Side */}
          <div className="lg:col-span-2">
            <ContactInfo />
          </div>

          {/* Right Side */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactInformation;
