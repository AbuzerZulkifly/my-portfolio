import React, { useState } from 'react'
import { LuPhoneCall, LuMail, LuMapPin, LuHeart } from "react-icons/lu";
import {toast} from 'react-hot-toast'


const ContactMe = () => {

  const [name, setName] = useState('');
  const [showCoolName, setShowCoolName] = useState(false);

   const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a6bba4e3-79fe-4bbe-8f99-dbe14a2bc8ef");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Email Sent Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
    
  };


  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center md:w-[1008px] md:px-5 md:gap-5 w-[369px] gap-3 mt-10"
    >
      <div className="flex items-center gap-4">
        <hr className="heading-line" />
        <h3 className="md:text-3xl text-center text-lg">Contact Me</h3>
        <hr className="heading-line" />
      </div>
      <div className="md:grid grid-cols-2 gap-10 flex flex-col  ">
        <div className=" flex flex-col md:gap-7 gap-6">
          <div className="flex flex-col gap-8">
            <h1 className="gradient-text md:text-6xl text-3xl">Lets Talk</h1>
            <p className="md:text-xl md:w-[100%]">
              I'm currently available to take on new projects and work with you.
              Feel free to reach out and let me know how I can help you.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <LuMail className="text-3xl text-blue-600" />
            <span className="text-2xl">zulkiflyabuzer@gmail.com</span>
          </div>

          <div className="flex items-center gap-4">
            <LuPhoneCall className="text-3xl text-blue-600" />
            <span className="text-2xl">+94 77 206 7224</span>
          </div>

          <div className="flex items-center gap-4">
            <LuMapPin className="text-3xl text-blue-600" />
            <span className="text-2xl">Kandy, Sri Lanka</span>
          </div>
        </div>

        <div className="">
          <form
            onSubmit={onSubmit}
            className="flex flex-col align-center gap-4"
          >
            <label htmlFor="">Your Name</label>

            <div className="flex flex-col gap-0.5">
              <input
                type="text"
                name="name"
                placeholder="John Smith"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={() => setShowCoolName(!!name)}
                onFocus={() => setShowCoolName(false)}
              />
              {showCoolName && (
                <div className="flex justify-center gap-2 items-center">
                  <LuHeart fill="red" className="text-red-600" />
                  <p className="text-lg text-green-400">Cool Name</p>
                  <LuHeart fill="red" className="text-red-600" />
                </div>
              )}
            </div>

            <label htmlFor="">Your Country</label>
            <input
              type="text"
              name="country"
              placeholder="United States of America"
            />

            <label htmlFor="">Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="johnsmith@gmail.com"
            />

            <label htmlFor="">Your Message</label>
            <textarea
              name="message"
              rows={5}
              placeholder="Write your message"
            ></textarea>

            <button className="btn-submit" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe