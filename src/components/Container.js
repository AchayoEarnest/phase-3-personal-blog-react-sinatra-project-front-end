import React, { useEffect, useState } from "react";
import Search from "./Search";
// import { Container, Header } from 'semantic-ui-react'
import Comments from "./Comments"


function LoadData() {
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    fetch("http://localhost:9292/create_posts")
      .then((r) => r.json())
      // .then((posts) => setPosts(posts));
    console.log(posts)
  }, [])
}

// const ContainerSect = () => (
//   <Container text className='PostContent'>
//     <Header as='h2'>Header</Header>
//     <p>
//       Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
//       ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
//       magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
//       ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
//       quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
//       arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
//       Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
//       dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
//       Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
//       Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
//       viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
//       Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
//     </p>
//     <p>
//       Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
//       ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
//       magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
//       ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
//       quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
//       arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
//       Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
//       dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
//       Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
//       Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
//       viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
//       Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
//     </p>
//     <Comments />
//   </Container>
// )

// export default ContainerSect

export default LoadData