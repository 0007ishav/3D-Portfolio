import React from 'react'

const Footer = () => {
  return (
    <section className='c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5'>
        <div className='text-white-500 flex gap-2'>
            <p>Terms & Conditions</p>
            <p>|</p>
            <p>Privacy Policy</p>
        </div>

        <div className='flex gap-3'>
                <a href="https://www.github.com/0007ishav" target='_blank' rel='noreferrer' className='social-icon'>
                <img src="/assets/github.svg" alt="github" className='w-1/2 h-1/2' />
                </a>
                <a href="https://www.linkedin.com/in/0007ishav" target='_blank' rel='noreferrer' className='social-icon'>
                <img src="/assets/linkedin.svg" alt="linkedin" className='w-1/2 h-1/2' />
                </a>
                <a href="https://instagram.com/0007ishav" target='_blank' rel='noreferrer' className='social-icon'>
                <img src="/assets/instagram.svg" alt="instagram" className='w-1/2 h-1/2' />
                </a>
                <a href="https://strngeblogs.hashnode.dev" target='_blank' rel='noreferrer' className='social-icon'>
                <img src="/assets/hashnode.svg" alt="hashnode" className='w-1/2 h-1/2' />
                </a>
            
        </div>
            <p className='text-white-500'>&copy; 2024 Ishav. All rights reserved. </p>
    </section>
  )
}

export default Footer