
import { MapPin, Phone, Mail, Dumbbell } from "lucide-react";

export default function BranchDetails({ branch }) {
  return (
    <section className="py-10 bg-[#f7f8f2]">
      <div className="w-11/12 mx-auto">

        <div className="max-w-3xl mb-12">
          <span className="text-primary font-semibold uppercase tracking-[3px] text-sm">
            About Our Branch
          </span>

          <h2 className="text-3xl md:text-3xl font-bold text-footer mt-3">
            Welcome to {branch.name}
          </h2>

          <p className="text-gray-600 leading-7 mt-1 text-sm">
            {branch.about}
          </p>
        </div>

        {/* Information */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Contact Information */}
          <div className="bg-white rounded-2xl p-7 md:p-9 shadow-sm border border-accent/20">
            <h3 className="text-2xl font-bold text-footer mb-7">
              Branch Information
            </h3>

            <div className="space-y-6">

              <div className="flex gap-4">
                <span className="w-8 h-8 shrink-0 rounded-xl bg-primary/10 text-primary grid place-items-center">
                  <MapPin size={18} />
                </span>
                <div>
                  <h4 className="font-bold text-footer">Location</h4>
                  <p className="text-gray-600 text-xs mt-1">
                    {branch.location}
                  </p>
                  <p className="text-gray-500 text-xs mt-1">
                    {branch.address}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="w-8 h-8 shrink-0 rounded-xl bg-primary/10 text-primary grid place-items-center">
                  <Phone size={18} />
                </span>
                <div>
                  <h4 className="font-bold text-footer">Phone</h4>
                  <p className="text-gray-600 text-xs mt-1">
                    {branch.phone}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="w-8 h-8 shrink-0 rounded-xl bg-primary/10 text-primary grid place-items-center">
                  <Mail size={18} />
                </span>
                <div>
                  <h4 className="font-bold text-footer">Email</h4>
                  <p className="text-gray-600 text-xs mt-1">
                    {branch.email}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Facilities */}
          <div className="bg-footer rounded-2xl p-7 md:p-9 text-white">
            <span className="w-12 h-12 rounded-xl bg-secondary/15 text-secondary grid place-items-center mb-6">
              <Dumbbell size={25} />
            </span>

            <h3 className="text-2xl font-bold mb-6">
              Our Facilities
            </h3>

            <div className="space-y-4">
              {branch.facilities.map((facility, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                  <p className="text-white/80 text-sm leading-6">
                    {facility}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
