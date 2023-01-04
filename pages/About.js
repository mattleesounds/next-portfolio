import React from 'react'
import Navbar from './components/Navbar'
import Particle from './components/Particle'
import Gradiant from './components/Gradient'

const About = () => {
  return (
    <section>
      <Navbar />
      <div className="h-full">
        <div className="text-center text-gray-light font-baloo mt-[125px]">
          <h1 className="text-3xl font-bold ">About</h1>
          <p className="m-5 mb-11">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate vestibulum consequat. Vivamus consectetur pharetra erat, sed venenatis mauris pulvinar et. Vivamus vel sollicitudin est. Aliquam vel eros pulvinar, dignissim ex semper, auctor lectus. Cras ut ante tellus. Suspendisse maximus dictum nisl, et pellentesque justo suscipit ac. Aenean vitae purus non felis accumsan efficitur. Mauris imperdiet enim ut ex blandit tincidunt. Maecenas ac erat in turpis blandit tincidunt at vitae dui. Proin convallis leo eu magna ultrices, et laoreet massa fermentum. In nec ullamcorper magna.

            Praesent vehicula ex sed lacus placerat maximus. Integer ligula diam, convallis id facilisis non, feugiat non velit. Etiam eget nisl sapien. Fusce id mauris eu ante tincidunt maximus non non diam. Quisque id purus vel sem gravida ullamcorper. Donec nec laoreet turpis, nec auctor tortor. Aenean ac felis vel dui laoreet blandit.

          </p>
        </div>

        <Particle />
        <div className="fixed bottom-0 left-0 right-0">
          <Gradiant style="bottom-gradiant" />
        </div>
      </div>

    </section>
  )
}

export default About