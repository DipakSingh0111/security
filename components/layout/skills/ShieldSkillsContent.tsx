import { LuPhone, LuMail, LuUser } from "react-icons/lu";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SecurityLogo from "@/components/shared/SecurityLogo";
import { getSkillsData } from "@/data";

export default function ShieldSkillsContent() {
  const data = getSkillsData();
  const { paragraphs, model, services } = data;

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Main Title Heading with Logo */}
        <div className="flex flex-col items-center justify-center gap-3 pb-8 border-b border-gray-200">
          <SecurityLogo isDark={false} />
          <div className="h-1 w-20 bg-signal rounded-full mt-2" />
        </div>

        {/* Introductory Overview */}
        <div className="mt-8 space-y-5 text-base leading-relaxed text-slate-700 sm:text-lg text-justify">
          {paragraphs.map((p, index) => (
            <p key={index}>{p}</p>
          ))}
        </div>

        {/* OUR MODEL Section */}
        <ScrollReveal direction="up">
          <div className="mt-12 overflow-hidden rounded-xl border border-gray-200 shadow-sm">
            <div className="bg-signal px-6 py-3.5 text-white">
              <h3 className="font-display text-lg font-bold tracking-wider uppercase sm:text-xl">
                {model.title}
              </h3>
            </div>

            <div className="bg-slate-50/60 p-6 sm:p-8 space-y-6 text-sm leading-relaxed text-slate-700 sm:text-base text-justify">
              <div>
                <h4 className="font-bold text-ink text-base sm:text-lg">
                  {model.trainerSelection.title}
                </h4>
                <p className="mt-1.5">
                  {model.trainerSelection.desc}
                </p>
                <ul className="mt-3 space-y-2 pl-2 text-left">
                  {model.trainerSelection.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="font-semibold text-signal">({['i', 'ii', 'iii', 'iv'][i] || i + 1})</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-gray-200/80 pt-5">
                <h4 className="font-bold text-ink text-base sm:text-lg">
                  {model.training.title}
                </h4>
                <p className="mt-1.5">
                  {model.training.desc}
                </p>
              </div>

              <div className="border-t border-gray-200/80 pt-5">
                <h4 className="font-bold text-ink text-base sm:text-lg">
                  {model.content.title}
                </h4>
                <p className="mt-1.5">
                  {model.content.desc}
                </p>
              </div>

              <div className="border-t border-gray-200/80 pt-5">
                <h4 className="font-bold text-ink text-base sm:text-lg">
                  {model.evaluation.title}
                </h4>
                <p className="mt-1.5">
                  {model.evaluation.desc}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* OUR SERVICES Section */}
        <ScrollReveal direction="up">
          <div className="mt-10 overflow-hidden rounded-xl border border-gray-200 shadow-sm">
            <div className="bg-signal px-6 py-3.5 text-white">
              <h3 className="font-display text-lg font-bold tracking-wider uppercase sm:text-xl">
                {services.title}
              </h3>
            </div>

            <div className="bg-slate-50/60 p-6 sm:p-8 space-y-6 text-sm leading-relaxed text-slate-700 sm:text-base">
              <div>
                <p className="text-justify">
                  <strong className="font-bold text-ink">
                    {services.skillsForJobTitle}{" "}
                  </strong>
                  {services.skillsForJobDesc}
                </p>
              </div>

              {/* Contact Information Box */}
              <div className="rounded-xl border border-red-200 bg-red-50/50 p-6 sm:p-7">
                <h4 className="font-display text-base font-bold text-signal sm:text-lg">
                  {services.contactBox.heading}
                </h4>

                <div className="mt-4 space-y-2 text-slate-800">
                  <p className="flex items-center gap-2 font-semibold text-ink">
                    <LuUser className="text-signal" size={18} />
                    <span>{services.contactBox.desk}</span>
                  </p>
                  <p className="text-sm font-medium text-slate-600 pl-6">
                    {services.contactBox.designation}
                  </p>
                  <p className="text-sm font-semibold text-slate-700 pl-6">
                    {services.contactBox.organization}
                  </p>
                  <p className="flex flex-wrap items-center gap-2 pt-2 text-sm">
                    <LuMail className="text-signal" size={17} />
                    <span className="text-slate-600">Email:</span>
                    {services.contactBox.emails.map((mail, idx) => (
                      <span key={mail.text} className="inline-flex items-center">
                        {idx > 0 && <span className="text-slate-400 mr-2">,</span>}
                        <a
                          href={mail.href}
                          className="font-medium text-signal hover:underline"
                        >
                          {mail.text}
                        </a>
                      </span>
                    ))}
                  </p>
                  <p className="flex items-center gap-2 pt-1 text-sm">
                    <LuPhone className="text-signal" size={17} />
                    <span className="text-slate-600">Tel:</span>
                    <a
                      href={services.contactBox.phone.href}
                      className="font-medium text-signal hover:underline"
                    >
                      {services.contactBox.phone.text}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
