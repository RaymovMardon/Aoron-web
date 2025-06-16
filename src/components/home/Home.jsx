import React from 'react'
import heroimg from "./img/hero.jpg"
export default function Home() {
  const style_one ={
    backgroundImage: `url(${heroimg})`,
      backgroundPosition: 'center 30%',
  }
  return (
    <>
    <section className='relative h-screen flex items-center overflow-hidden mt-3'>
<div className='absolute inset-0 w-full h-full bg-cover bg-center' style={style_one}>1</div>
    <div className='container mx-auto px-4 relative z-10'>
      <div className='max-w-2xl'>
        <div className='flex flex-col items-start space-y-8 animate-fade-up'>
          <span className='inline-block bg-white/10 backdrop-blur-sm px-3 py-1 text-xs tracking-wider uppercase text-white'>Spring/Summer 2025</span>
          <h1 className='text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white'>Premium Menswear</h1>
        <p className='text-lg md:text-xl text-white/90 max-w-lg'>Quality fabrics. Perfect fit. Timeless style.</p>
        <a className='group bg-white text-primary px-6 py-3 rounded-md inline-flex items-center hover:bg-white/90 transition-colors' href="/catalog">Explore Collection</a>
        </div>
      </div>
    </div>
    </section>
    <div>Home page</div>
    </>
  )
}
