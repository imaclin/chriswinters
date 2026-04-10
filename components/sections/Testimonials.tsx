const testimonials = [
  {
    quote:
      "Chris Winters went the extra mile for me after being turned down by five lawyers. I got the outcome I wanted.",
    caseType: "Dram shop case (bar/restaurant), client with severe head injury",
  },
  {
    quote:
      "Over the past 12 months we have known you, you have greatly helped make an unbearable tragedy more bearable. Your integrity and empathy have almost renewed my optimism and faith in mankind. In these times and circumstances, a man of character is rare.",
    caseType: "Wrongful death of beloved teenage daughter",
  },
  {
    quote:
      "Most of all, thank you for taking the time and interest in getting to know who Denny was as a person. Thank you for going above and beyond your job. We are glad you are not out of our lives now that the case is closed, and are honored to have you as a lifelong friend.",
    caseType: "Wrongful death of beloved son",
  },
  {
    quote:
      "We are grateful for everything you have done for us. Although you never knew our mother, you fought for her as if you did. You never gave up, and that kept us going as well. You honestly cared and showed compassion that is so rarely seen nowadays.",
    caseType: "Wrongful death of young mother",
  },
  {
    quote:
      "I know she has blessed us with bringing you into our lives. I want you to know that you have given my sister and I the chance of a future, and there is no better gift than that.",
    caseType: "Wrongful death of single mother, leaving two teenage daughters",
  },
  {
    quote:
      "Thank you for all your hard work on her case. We will spread the word.",
    caseType: "Wrongful death of 55-year-old father",
  },
];

export function Testimonials() {
  return (
    <section className="section bg-off-white">
      <div className="container">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="eyebrow">Client Testimonials</span>
          <h2 className="font-serif text-3xl font-bold text-navy mb-4">
            What Our Clients Say
          </h2>
          <div className="divider divider--center" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded shadow-sm border border-light-gray p-8 flex flex-col"
            >
              <div className="text-gold text-4xl font-serif leading-none mb-4 select-none">
                &ldquo;
              </div>
              <p className="text-text-body italic font-serif flex-1 mb-6">
                {t.quote}
              </p>
              <p className="text-xs text-navy/60 font-medium uppercase tracking-wide border-t border-light-gray pt-4">
                {t.caseType}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
