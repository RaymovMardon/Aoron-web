import React from 'react'

export default function About() {
return (
<section className='bg-neutral-50 py-10 border-b'>
  <div className="container mx-auto px-4 max-w-4xl ">
    <div className="rounded-2xl shadow-lg p-8 md:p-12 space-y-10 bg-white text-neutral-900">
      <h2 className='text-2xl md:text-3xl font-[650] text-neutral-900 mb-2'>
        About AORON
      </h2>
      <p className='text-lg text-neutral-700 '>
        AORON is a manufacturing brand offering stylish, quality and competitive apparel for B2B partnerships. We have
        been operating since 1991 and specialize in creating men's and women's clothing, focused on wholesale, retail
        chains and custom orders for brands and boutiques.
      </p>
      <h2 className=''>
        Today we develop two directions:
      </h2>
      <ul>
        <li>
          <p>
            Prince - a classic line of men's suits, proven by time and quality;
          </p>
        </li>
        <li>
          <p>
            AORON - a modern brand with an expanded assortment: from casual wear to accessories and shoes.
          </p>
        </li>
      </ul>
      <hr />
    </div>
  </div>
</section>
)
}