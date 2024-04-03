import React, { useEffect, useState } from 'react';

function MainPage() {
  function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <head>
    <meta name="p:domain_verify" content="e44d690008316f3b0c39649267bbb8bb"/>
    </head>
    <div className='text-white font-semibold' style={{ minHeight: '100vh' }}>
       <nav className='flex flex-row justify-evenly list-none	pt-5 text-red-400'>
          <li><button onClick={() => scrollToSection('skills')}>Skills</button></li>
          <li><button onClick={() => scrollToSection('home')}>Home</button></li>
          <li><button onClick={() => scrollToSection('contact')}> Contact</button></li>
       </nav>

       <section className='homeSection' id='home'>
  <div className='flex justify-center items-center flex-col' style={{ paddingTop: '10%'}}>
    <h1 className='font-thin text-4xl text-center' style={{ color: '#a6a4a4' }}>Hi, I'm Meni 👋!</h1>
    <p className='pt-2 text-center font-normal' style={{ color: '#a6a4a4' }}>Hey I'm Meni, but go by the name Nexus online<br></br>I have used discord.js and svelte for a bit, but now I code in reactJS.<br></br> I'm from 🇸🇷 Suriname ( Shocker? )<br></br><br></br>Got a question? <span className='font-semibold'><button onClick={() => scrollToSection('contact')}>Contact me</button></span></p>
  </div>
</section>


<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br><section className='codedIn' id='skills'>
  <div className='flex justify-center items-center flex-col' style={{ paddingTop: '10%' }}>
    <h1 className='font-thin text-4xl text-center' style={{ color: '#a6a4a4' }}>Languages & Frameworks!</h1>
    <p className='pt-2 text-center font-normal' style={{ color: '#a6a4a4' }}>Here are the libraries / Frameworks I can code in</p>
  </div>
  <div className='skill-section flex flex-wrap justify-center items-center gap-3 mt-4'>
    <div className="skill-img w-32 h-32 sm:w-24 sm:h-24  rounded-full flex items-center justify-center">
      <img src="/programmingLanguages/html.png" alt="Your Image" className="object-cover hover:scale-125 transform transition-transform duration-300 bg-black bg-opacity-900" height='40' width='40'  />
    </div>

    <div className="skill-img w-32 h-32 sm:w-24 sm:h-24  rounded-full flex items-center justify-center">
      <img src="/programmingLanguages/css.png" alt="Your Image" className="object-cover hover:scale-125 transform transition-transform duration-300 bg-black bg-opacity-900" height='40' width='40' />
    </div>

    <div className="skill-img w-32 h-32 sm:w-24 sm:h-24  rounded-full flex items-center justify-center">
      <img src="/programmingLanguages/svelte.png" alt="Your Image" className="object-cover hover:scale-125 transform transition-transform duration-300 bg-black bg-opacity-900" height='40' width='40' />
    </div>

    <div className="skill-img w-32 h-32 sm:w-24 sm:h-24  rounded-full flex items-center justify-center">
      <img src="/programmingLanguages/discordjs.png" alt="Discord.js Logo" className="object-cover rounded-full hover:scale-125 transform transition-transform duration-300 bg-black bg-opacity-900" height='70' width='70' />
    </div>

    <div className="skill-img w-32 h-32 sm:w-24 sm:h-24  rounded-full flex items-center justify-center">
      <img src="/programmingLanguages/tailwindcss.png" alt="Tailwind CSS Logo" className="object-cover hover:scale-125 transform transition-transform duration-300 bg-black bg-opacity-900" height='70' width='70' />
    </div>

    <div className="skill-img w-32 h-32 sm:w-24 sm h-24  rounded-full flex items-center justify-center">
      <img src="/programmingLanguages/javascript.png" alt="JavaScript Logo" className="object-cover hover:scale-125 transform transition-transform duration-300 bg-black bg-opacity-900" height='70' width='70' />
    </div>

    <div className="skill-img w-32 h-32 sm:w-24 sm:h-24  rounded-full flex items-center justify-center">
      <img src="/programmingLanguages/reactjs.png" alt="React Logo" className="object-cover hover:scale-125 transform transition-transform duration-300 bg-black bg-opacity-900" height='40' width='40' />
    </div>
  </div>
</section>








<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<section className='contactSection' id='contact' style={{ minHeight: '100vh' }}>
  <div className='flex justify-center items-center flex-col' style={{ paddingTop: '10%'}}>
    <h1 className='font-thin text-4xl text-center' style={{ color: '#a6a4a4' }}>Contact Me 📞!</h1>
    <p className='pt-2 text-center font-normal' style={{ color: '#a6a4a4' }}> You can email me at <span className='font-semibold'>nexusptx@gmail.com</span> and <span className='font-semibold'>jmn3x@outlook.com</span>. <br></br>I'm also on Instagram as <span className='font-semibold'>@nex4s_</span></p>
  </div>
</section>


</div>

  );
}

export default MainPage;
