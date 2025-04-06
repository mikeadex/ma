import FaqItem from "./faq-item";

const faqData = [
  {
    id: "collapseOne",
    title: "No rocket science included",
    content:
      "Nancy boy it's all gone to pot grub absolutely bladdered some dodgy chav owt to do with me vagabond only.!",
    isExpanded: true,
  },
  {
    id: "collapseTwo",
    title: "Blazing Site Performance",
    content:
      "Nancy boy it's all gone to pot grub absolutely bladdered some dodgy chav owt to do with me vagabond only.!",
    isExpanded: false,
  },
  {
    id: "collapseThree",
    title: "Bonus Plugins Included",
    content:
      "Nancy boy it's all gone to pot grub absolutely bladdered some dodgy chav owt to do with me vagabond only.!",
    isExpanded: false,
  },
];

export default function FaqOne() {
  return (
    <section className="faq__area p-relative pt-135 pb-120 grey-bg-12">
      <div
        className="faq__thumb"
        style={{
          background: `url(/assets/img/faq/faq-1.jpg)`,
        }}
      ></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-5 offset-xl-7 col-lg-6 offset-lg-6 col-md-7 offset-md-5">
            <div className="faq__wrapper">
              <div
                className="section__title section__title-3 mb-25 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <span>Thinking</span>
                <h2>
                  Knowledge is <br /> the best investment
                </h2>
              </div>

              <div className="accordion" id="accordionExample">
                {faqData.map((faq, index) => (
                  <FaqItem key={index} item={faq} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
