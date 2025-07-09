import React from "react"

const Back = ({ title, showContent = true }) => {
  // Hash'ten current path'i al
  const currentPath = window.location.hash.replace('#/', '') || ''

  return (
    <>
      <section className='back'>
        {showContent && (
          <>
            <h2>Home / {currentPath}</h2>
            <h1>{title}</h1>
          </>
        )}
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Back
