import ContactForm from '@/components/forms/ContactForm'
// import ProjectForm from '@/components/forms/ProjectForm'
// import ServiceForm from '@/components/forms/ServiceForm'
import React from 'react'

const Map = () => {
  return (
    <>
   <div id='contact-us' className="grid grid-cols-1 md:grid-cols-2 min-h-[60vh] ">
      {/* Left - Google Map */}
      <div className="w-full h-[400px] md:h-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.5530989783624!2d76.2113153!3d10.535821600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cd7f98b8c9db619%3A0x3f5dae1a5dab7e0c!2sAurex%20Builders%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1758519436187!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full border-0"
        ></iframe>
      </div>

      {/* Right - Contact Form */}
      <div className="flex items-center justify-center bg-white">
        <ContactForm />
      </div>
    </div>

    </>
  )
}

export default Map