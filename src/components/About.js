//shorthand - rafce
import React from 'react'

const About = () => {
  return (
    <div className="text-center">
      <h3 className="text-3xl my-4 text-green-500">Watch this video to know more about us!</h3>
      <iframe className="m-auto" frameborder="0" allowfullscreen="" width={800} height={400} src="https://player.vimeo.com/video/275412279"></iframe>
     </div>
  )
}

export default About