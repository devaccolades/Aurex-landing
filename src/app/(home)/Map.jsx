import ContactForm from '@/components/forms/ContactForm'
// import ProjectForm from '@/components/forms/ProjectForm'
// import ServiceForm from '@/components/forms/ServiceForm'
import React from 'react'
import {projectsData} from '../../data/cardData'

const Map = () => {
  return (
    <>
      <div id='contact-us' className="grid grid-cols-1 md:grid-cols-2 min-h-[60vh]">
        
        {projectsData.map((project, index) => (
          <div key={index} className="w-full h-[400px] md:h-auto">
            <iframe
              src={project.map_iframe}
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0"
            ></iframe>
          </div>
        ))}

        {/* Right - Contact Form */}
        <div className="flex items-center justify-center bg-white">
          <ContactForm />
          {/* <ProjectForm projectName="Aurex Cascade City" /> */}
          {/* <ServiceForm service="Web Development" /> */}
        </div>
      </div>
    </>
  )
}

export default Map
