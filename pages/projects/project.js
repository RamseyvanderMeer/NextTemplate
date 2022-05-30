import Link from "next/link"
import Image from "next/image"
import Script from "next/script"
import Head from "next/head"

import Layout from "../../components/layout"
import Alert from "../../components/alert"
import profile from "../../public/images/ramsey.jpg"
export default function project() {
  return (
    <Layout>
      <Head>
        <title>project1</title>
      </Head>
      <h1><Alert type="error">First Post</Alert></h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <Image
        src={profile} // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        //layout="fill"
        alt="Ramsey van der Meer"
        placeholder="blur" // Optional blur-up while loading
      />
      <Layout>
        <div id="wrapper"></div>
        <Script
          src="http://kickstart.ch/js/meshspin.min.js"
          strategy="beforeInteractive"
        />
        <Script strategy="lazyOnload">
          {`
        var phi = (1 + Math.sqrt(5)) / 2;
        var dodecahedron = {}
        dodecahedron.nodes = [
            {x:1, y: 1, z: 1},
            {x:1, y: 1, z: -1},
            {x:1, y: -1, z: 1},
            {x:1, y: -1, z: -1},
            {x:-1, y: 1, z: 1},
            {x:-1, y: 1, z: -1},
            {x:-1, y: -1, z: 1},
            {x:-1, y: -1, z: -1},
            {x:0, y: phi, z: 1/phi},
            {x:0, y: phi, z: -1/phi},
            {x:0, y: -phi, z: 1/phi},
            {x:0, y: -phi, z: -1/phi},
            {x:1/phi, y: 0, z: phi},
            {x:1/phi, y: 0, z: -phi},
            {x:-1/phi, y: 0, z: phi},
            {x:-1/phi, y: 0, z: -phi},
            {x:phi, y: 1/phi, z: 0},
            {x:phi, y: -1/phi, z: 0},
            {x:-phi, y: 1/phi, z: 0},
            {x:-phi, y: -1/phi, z: 0},
        ];
        dodecahedron.edges = [[0,16], [0,8], [0,12], [1,9], [1,13], [1,16], [2,10], [2,12], [2,17], [3,11], [3,13], [3,17], [4,8], [4,14], [4,18], [5,9], [5,15], [5,18], [6,10], [6,14], [6,19], [7,11], [7,15], [7,19], [8,9], [10,11], [12,14], [13,15], [16,17], [18,19]];
        var mesh = new MeshSpin();
        //mesh.props.fake3D = true;
        mesh.props.background = true;
        mesh.props.fillColor = 'red';
        mesh.props.orientation = {x: 0, y: Math.PI/4, z: 0 };
        mesh.props.staticRotation = {x: -0.01, y: 0, z: 0.01};
        mesh.figure(dodecahedron);
        mesh.setup('wrapper');
        mesh.run();
`}
        </Script>
      </Layout>
    </Layout>
  )
}
