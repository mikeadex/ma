import { NavLink } from "react-router-dom";

const faqData = [
  {
    id: 1,
    question: "Can you help my business grow?",
    answer: "He nicked it show off show pick your nose and blow off such a fiber bleeding well get stuffed mate no biggie, in my flat bugger wind up cheesed off blower burke james bond cheeky."
  },
  {
    id: 2,
    question: "What are your best interest rates?",
    answer: "He nicked it show off show pick your nose and blow off such a fiber bleeding well get stuffed mate no biggie, in my flat bugger wind up cheesed off blower burke james bond cheeky."
  },
  {
    id: 3,
    question: "How do you calculate cost of services?",
    answer: "He nicked it show off show pick your nose and blow off such a fiber bleeding well get stuffed mate no biggie, in my flat bugger wind up cheesed off blower burke james bond cheeky."
  },
  {
    id: 4,
    question: "How do you calculate cost of services?",
    answer: "He nicked it show off show pick your nose and blow off such a fiber bleeding well get stuffed mate no biggie, in my flat bugger wind up cheesed off blower burke james bond cheeky."
  }
];

export default function FaqTwo() {
  return (
    <section className="faq__area pb-200 pt-75">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-5 col-md-5">
            <div className="faq__content">
              <div className="section-title mb-45">
                <h2>Do you have <br /> Any question</h2>
                <p>We help you weather {"today's"} uncertainty through our best team.</p>
              </div>
              <NavLink to="/about" className="z-btn z-btn-border">All Question</NavLink>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-7 offset-xl-2 offset-lg-1">
            <div className="faq__accordion p-relative">
              <div className="accordion" id="accordionExample">
                {faqData.map(({ id, question, answer }) => (
                  <div className="card accordion-item" key={id}>
                    <div className="card-header accordion-header" id={`acc_${id}`}>
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse_${id}`}
                          aria-expanded="true"
                          aria-controls={`collapse_${id}`}
                        >
                          {question}
                        </button>
                      </h5>
                    </div>

                    <div
                      id={`collapse_${id}`}
                      className="collapse"
                      aria-labelledby={`acc_${id}`}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="card-body accordion-body">
                        <p>{answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
