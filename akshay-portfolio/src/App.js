import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";

export default function InsanePortfolio() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const [openPreview, setOpenPreview] = useState(false);
  const [zoom, setZoom] = useState(1);

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div ref={ref} className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* STICKY CONTACT BAR */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 backdrop-blur-xl bg-white/10 border border-white/20 px-6 py-3 rounded-full flex gap-4 items-center">
        <span className="text-sm text-gray-300">Open to EST/PST • Immediate Joiner</span>
        <a href="mailto:akshaykumar6991@zohomail.in">
          <Button className="rounded-full px-4 py-2 bg-white text-black text-sm">Email</Button>
        </a>
        <a href="https://www.linkedin.com/in/akshay-kumar-65056717a/" target="_blank">
          <Button className="rounded-full px-4 py-2 text-sm">LinkedIn</Button>
        </a>
      </div>

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1 style={{ scale, opacity }} className="text-6xl md:text-8xl font-semibold tracking-tight">
          Akshay
        </motion.h1>

        <p className="mt-4 text-lg md:text-2xl text-gray-400 max-w-2xl">
          Support Operations Specialist | 1000+ Cases/Month | SLA-Driven | Enterprise SaaS Support
        </p>

        <div className="mt-8 flex gap-4">
          <Button className="rounded-full px-8 py-4">Explore ↓</Button>
          <Button onClick={() => setOpenPreview(true)} className="rounded-full px-8 py-4 bg-white text-black">
            View Resume
          </Button>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="py-24 text-center max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-semibold">Why Hire Me</h2>
        <p className="mt-6 text-gray-400">
          I bring structured support operations, strong SLA ownership, and cross-functional execution. I reduce resolution time, improve queue efficiency, and handle enterprise-level complexity with consistency.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <h2 className="text-5xl text-center font-semibold">Experience</h2>

        <div className="mt-10 space-y-8">
          <motion.div whileHover={{ scale: 1.02 }} className="border border-white/10 p-6 rounded-2xl backdrop-blur-md">
            <h3 className="text-2xl font-semibold">Technical Support Consultant / Queue Manager</h3>
            <p className="text-gray-400">Adobe Inc. | Feb 2023 – Present</p>
            <ul className="mt-4 text-gray-400 space-y-2 text-sm">
              <li>• Managed 1000+ monthly cases with structured triage & prioritization</li>
              <li>• Achieved 90%+ SLA compliance across global queues</li>
              <li>• Owned real-time queue balancing during peak load</li>
              <li>• Led escalations with Product & Engineering</li>
              <li>• Handled SSO, provisioning, domain & identity workflows</li>
              <li>• Mentored new hires and improved onboarding efficiency</li>
            </ul>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="border border-white/10 p-6 rounded-2xl backdrop-blur-md">
            <h3 className="text-2xl font-semibold">Technical Support Executive (L1/L2)</h3>
            <p className="text-gray-400">Teleperformance | Sep 2021 – Jan 2023</p>
            <ul className="mt-4 text-gray-400 space-y-2 text-sm">
              <li>• L1/L2 troubleshooting for storage & firmware issues</li>
              <li>• Windows/macOS compatibility & performance fixes</li>
              <li>• Data migration & encryption support</li>
              <li>• Backend engineering coordination</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* CASE STUDIES (RECRUITER MAGNET) */}
      <section className="py-20 bg-white text-black">
        <h2 className="text-4xl text-center font-semibold">Case Studies</h2>

        <div className="mt-10 grid md:grid-cols-2 gap-6 max-w-6xl mx-auto px-6">
          {[
            {
              title: "SLA Recovery",
              desc: "Stabilized queue during spike, avoided SLA breach by rebalancing workload",
            },
            {
              title: "Provisioning Issue Resolution",
              desc: "Diagnosed Azure sync mismatch & escalated with complete logs",
            },
          ].map((item, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="p-6 rounded-2xl shadow bg-black text-white">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-400 mt-2 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-semibold">Core Capabilities</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          {[
            "Salesforce / Zendesk",
            "SLA & Queue Ops",
            "Incident Triage",
            "SSO & IAM",
            "Cross-team Collaboration",
            "Process Optimization",
          ].map((skill, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-white/10 p-6 rounded-2xl">
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* IMPACT */}
      <section className="py-20 text-center">
        <h2 className="text-5xl font-semibold">Impact</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {["1000+ Cases", "90% SLA", "Global Coverage"].map((stat, i) => (
            <motion.div key={i} initial={{ scale: 0 }} whileInView={{ scale: 1 }} className="text-3xl font-semibold">
              {stat}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <Button onClick={() => setOpenPreview(true)} className="rounded-full px-10 py-5 text-xl">
          Preview Resume
        </Button>
      </section>

      {/* PREVIEW MODAL */}
      {openPreview && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-xl z-50 flex flex-col">
          <div className="flex justify-between items-center p-4 border-b border-white/10">
            <h3 className="text-lg">Resume</h3>
            <div className="flex gap-3">
              <Button onClick={() => setZoom((z) => z + 0.1)}>+</Button>
              <Button onClick={() => setZoom((z) => Math.max(0.5, z - 0.1))}>-</Button>
              <a href="/Akshay_Kumar_Resume_Updated_v2.pdf" download>
                <Button className="bg-white text-black">Download</Button>
              </a>
              <Button onClick={() => setOpenPreview(false)}>Close</Button>
            </div>
          </div>

          <div className="flex-1 overflow-auto flex justify-center items-start p-6">
            <div style={{ transform: `scale(${zoom})`, transformOrigin: "top center" }}>
              <object
                data="/Akshay_Kumar_Resume_Updated_v2.pdf"
                type="application/pdf"
                className="w-[800px] h-[1000px] rounded-xl shadow-2xl"
              >
                <p className="text-center text-gray-400">
                  Preview not supported.
                  <a href="/Akshay_Kumar_Resume_Updated_v2.pdf" target="_blank" className="underline ml-2">
                    Open Resume
                  </a>
                </p>
              </object>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
