import React from 'react'

const Header = () => {
  return (
    <section>
      <div>
        {/* TODO: Add sanity to call data dynamically */}
        <h1 className="text-white font-bold text-5xl"><a href="/">Lucas Chen</a></h1>
        <h4 className="mt-3 max-w-xs text-lg font-medium tracking-tight text-white sm:text-xl">Full Stack Engineer Intern at Hexagon MI</h4>
        <p  className="text-slate mt-4 max-w-xs leading-normal">I am a fourth year Software Engineering student at McMaster.</p>
      </div>
    </section>
  )
}

export default Header