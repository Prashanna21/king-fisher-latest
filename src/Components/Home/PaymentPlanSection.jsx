import { motion } from "framer-motion";

const paymentSchedule = [
  { step: 1, percentage: "20%", note: "On booking" },
  { step: 2, percentage: "5%", note: "15th April 2025" },
  { step: 3, percentage: "5%", note: "15th August 2025" },
  { step: 4, percentage: "10%", note: "15th November 2025" },
  { step: 5, percentage: "10%", note: "15th March 2026" },
  { step: 6, percentage: "10%", note: "15th July 2026" },
  { step: 7, percentage: "40%", note: "Q1 2027 On Completion" },
];

const PaymentPlanSection = () => {
  return (
    <section
      id="payment-plan"
      className="py-24 px-6 md:px-16 lg:px-24 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="heading-font text-center text-3xl md:text-4xl lg:text-5xl font-light tracking-widest mb-6 font-serif">
          PAYMENT PLAN
        </h2>
        <div className="grid md:grid-cols-2 gap-16 items-start mt-12">
          {/* Left: Payment Steps */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-12">
            {paymentSchedule.map((item, index) => (
              <motion.div
                key={index}
                className="group pb-6 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neutral-300 to-transparent group-hover:via-amber-200 transition-all duration-500"></div>

                <div className="flex flex-col items-center">
                  <span className="text-xs text-neutral-400 mb-3 font-light tracking-wider">
                    STEP {item.step}
                  </span>
                  <p className="text-3xl font-light mb-2 group-hover:text-amber-800 transition-colors duration-300">
                    {item.percentage}
                  </p>
                  <p className="text-sm text-neutral-600 font-light tracking-wide">
                    {item.note}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Image */}
          <motion.div
            className="w-full h-full overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className=" overflow-hidden">
              <div className="absolute inset-0 border border-neutral-200"></div>
              <img
                src="new/1.jpg"
                alt="Luxury Property View"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PaymentPlanSection;
