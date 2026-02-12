"use client";
import React, { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/utils/cn';

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: "What is Taakra?",
        answer: "Taakra is a student-led society at UCP focused on developing students' skills across various fields including business, media, technology, and creative domains. We provide opportunities for hands-on learning, networking, and professional growth."
    },
    {
        question: "What domains can I join?",
        answer: "We offer multiple domains for you to explore and develop your skills: Graphics Design, Web Hosting, Communication, Management, Social Media, Marketing, and Creatives. You can join one or multiple domains based on your interests and career goals."
    },
    {
        question: "Do you organize industrial tours?",
        answer: "Yes! We regularly organize industrial tours to give students real-world exposure and insights into various industries. These tours help bridge the gap between academic learning and practical industry experience."
    },
    {
        question: "How do I join Taakra?",
        answer: "You can join Taakra by visiting our website and selecting the domain(s) you're interested in. Click on 'Join Us' to register, or attend our information sessions at the beginning of each semester."
    },
    {
        question: "Can I join multiple domains?",
        answer: "Absolutely! We encourage students to explore multiple domains to broaden their skill set. You can participate in multiple domains and develop diverse skills."
    },
    {
        question: "What skills will I develop?",
        answer: "Depending on your chosen domain, you'll develop practical skills relevant to your field. From graphic design and creative skills to business management, social media marketing, communication strategies, and technical hosting knowledge."
    },
    {
        question: "How can I contact Taakra?",
        answer: "You can contact us through our website, social media platforms, or by reaching out to our leadership team."
    }
];

function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

    const toggleFAQ = (index: number) => setOpenIndex(openIndex === index ? null : index);

    return (
      <section
  id="faq"
  className="relative w-full pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 lg:pb-16 bg-[#0D0D0D] overflow-hidden"
>


  <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Heading Section */}
    <div className="text-center mb-12 sm:mb-16" data-aos="fade-up" data-aos-duration="700">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-r from-[#6EA8DC] via-[#3d6b1f] to-[#6EA8DC] bg-clip-text text-transparent">
          Questions
        </span>
      </h2>
      <p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
        Find answers to common questions about Taakra. Can't find what you're looking for? Contact us!
      </p>
    </div>

    {/* FAQ Items */}
    <div className="space-y-4" data-aos-duration="600" data-aos="fade-up" data-aos-delay="200">
      {faqData.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={cn(
              "group border rounded-2xl overflow-hidden transition-all duration-300",
              "hover:border-[#6EA8DC]/30 hover:shadow-lg hover:shadow-black/20",
              isOpen && "border-[#6EA8DC]/50 shadow-lg shadow-black/20",
              "bg-[#111]" // Dark background for FAQ items
            )}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[#6EA8DC]/20 rounded-2xl transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
              <ChevronDown
                className={cn(
                  "flex-shrink-0 w-5 h-5 text-[#6EA8DC] transition-transform duration-300",
                  isOpen && "transform rotate-180"
                )}
              />
            </button>

            <div
              ref={(el) => { contentRefs.current[index] = el ?? null; }}
              className={cn(
                "overflow-hidden transition-all duration-300 ease-in-out",
                isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <div className="px-6 pb-5">
                <div className="h-px bg-gradient-to-r from-transparent via-[#6EA8DC]/30 to-transparent mb-4"></div>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>

    );
}

export default FAQ;
