import React, { useState } from 'react';


const Resume = () => {

    

    // set state variables for contact-info fields
    const [contactInfo, setContactInfo] = useState([
      {
          id: 1,
          title: 'Email',
          href: 'mailto:catherinemcneel@icloud.com',
          imgSrc: '/images/email.jpg',
          alt: 'email link with letter icon',
          data: 'catherinemcneel@icloud.com',
          target: '_blank',
      },
      {
          id: 2,
          title: 'linkedin',
          href: 'https://www.linkedin.com/in/catherine-mcneel/',
          imgSrc: '/images/linkedin.jpg',
          alt: 'LinkedIn logo',
          data: 'LinkedIn Profile',
          target: '_blank',
      },
      {
          id: 3,
          title: 'Github',
          href: 'https://github.com/cathmcneel',
          imgSrc: '/images/github.jpg',
          alt: 'Github logo',
          data: 'Github Profile',
          target: '_blank',
      },
      {
          id: 5,
          title: 'Resumé',
          href: '/images/CMcNeel_Resume.pdf',
          imgSrc: '/images/resume.jpg',
          alt: 'Resumé icon',
          data: 'Download Resumé',
          target: '',
      }
    ])
    
    const [hoverText, setHoverText] = useState('');
    
        const showHoverText = (item) => {
        // sets state of hoverText to item that user is hovering over. Then displays item.value in HTML of #hoverText
            
            // set state of hover text
            setHoverText(item.data)
        }
    
        const removeHoverText = () => {
          // sets state of hoverText to empty string when user's mouse leaves contact item
      
              // set state of hover text to empty string
              setHoverText('')
          }  
    return (
        <div>
       

        <div className="resume-area">
                 <section id='contactItems'>
                    {/* Render each contact item */}
                    {contactInfo.map((item) => 
                        (<a key={item.id} href={item.href} target={item.target}><img id="singleimageresume" src={item.imgSrc} alt={item.alt} className='contact-item' data-label={item.data} onMouseOver={() => showHoverText(item)} onMouseLeave={() => removeHoverText()}></img></a>)
                    )}
                </section>
                <br></br>
                <h1 class="resume-text"> Like what you see? Check out my LinkedIn, Github, and Resume below, or go ahead and shoot me an email by clicking on the icon below. Looking forward to hearing from you!</h1>
        </div>
        </div>
    
    )}

    

export default Resume;