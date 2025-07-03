import { motion } from 'framer-motion';

export default function ContactForm() {
  return (
    <motion.form
      className="flex flex-col gap-5 pb-5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 3, duration: 1 }}
    >
      <input className="p-5 bg-transparent border-b-2 border-b-white" type="text" required placeholder="Enter your name" />
      <input className="p-5 bg-transparent border-b-2 border-b-white" type="email" required placeholder="Enter your email" />
      <textarea className="border-b-2 p-7 bg-transparent border-b-white" rows={8} placeholder="Hi, I'm Milan, ..." />
      <button className="p-5 bg-white hover:bg-white/40 rounded-full cursor-pointer">
        <h1 className="text-black tracking-widest uppercase text-md text-bold">Submit</h1>
      </button>
    </motion.form>
  );
}
