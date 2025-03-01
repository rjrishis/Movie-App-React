import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
   <div className="reltaive pt-10">
   
   <Link
          className="hover:text-[#6556cd] ri-arrow-left-line pt-52 ml-10 text-3xl"
          onClick={() => navigate(-1)}
        ></Link>

     <div className="md:ml-[35vw] -mt-[5vw] flex flex-col items-center justify-center min-h-screen bg-[#1F1E24] text-white p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-extrabold mb-6 text-white drop-shadow-lg"
      >
        Contact Us
      </motion.h1>

      <motion.form
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        onSubmit={handleSubmit}
        className="bg-[#272636] p-8 rounded-2xl shadow-2xl w-full max-w-md"
      >
        <label className="block mb-2 text-[#6556CD] font-semibold">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 mb-4 bg-[#3A3751] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6556CD] shadow-md"
          required
        />

        <label className="block mb-2 text-[#6556CD] font-semibold">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 mb-4 bg-[#3A3751] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6556CD] shadow-md"
          required
        />

        <label className="block mb-2 text-[#6556CD] font-semibold">Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 mb-4 bg-[#3A3751] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6556CD] shadow-md"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-[#6556CD] text-white p-3 rounded-lg font-bold hover:bg-[#5746B0] transition duration-300 shadow-lg"
        >
          Submit
        </button>
      </motion.form>

      {submitted && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 text-lg font-semibold text-[#6556CD]"
        >
          Message sent successfully!
        </motion.p>
      )}
    </div>
   </div>
  );
};

export default ContactUs;
