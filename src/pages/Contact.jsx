import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.SERVICEID, process.env.TEMPLATEID, e.target, process.env.PUBLICID)
      .then((result) => {
        toast.success('Message Sent!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored"
        });
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          message: ''
        });
      }, (error) => {
        toast.error('Message Not Sent!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored"
        });
      });
  };

  return (
    <div className="container mx-auto my-16 px-4 sm:px-12  py-4" id="contact">
      <ToastContainer />
      <div className="flex flex-col xl:flex-row gap-[30px]">
        {/* Form Section */}
        <div className="xl:w-[54%] order-2 xl:order-none bg-[#1D293A] p-10 rounded-xl">
          <h3 className="text-xl sm:text-4xl text-teal-400 mb-4">Let's work together</h3>
          <p className="text-white/60 mb-8">
           Hope you will find me fit for your desired work and your wishes will come true.
          </p>
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            {/* Input Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input type="text" name="firstname" placeholder="Firstname" value={formData.firstname} onChange={handleChange} />
              <Input type="text" name="lastname" placeholder="Lastname" value={formData.lastname} onChange={handleChange} />
              <Input type="email" name="email" placeholder="Email address" value={formData.email} onChange={handleChange} />
              <Input type="tel" name="phone" placeholder="Phone number" value={formData.phone} onChange={handleChange} />
            </div>
            <div className="mt-6">
              <textarea
                name="message"
                className="w-full p-4 rounded-lg bg-[#00e187] text-white placeholder-gray-900 focus:border-teal-400"
                rows="5"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="mt-6 px-6 py-3 bg-accent text-white rounded-lg transition-all duration-300 hover:border-2 hover:border-teal-300">
              Send Message
            </button>
          </form>
        </div>
        {/* Info Section */}
        <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
          <div className="text-white">
            <h4 className="text-3xl mb-4 text-teal-600 font-semibold">Contact Information</h4>
            <p className="mb-2">Email: sohelmatubber4@gmail.com</p>
            <p className="mb-2">Phone: (+880) 173-530-2123</p>
            <p>Address: Madaripur Sadar, Madaripur, Dhaka BD</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Input = ({ type, name, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      className="p-4 rounded-lg bg-[#194356d9] text-white placeholder-teal-500 focus:border-teal-400"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Contact;
