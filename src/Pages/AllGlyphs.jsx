import { useEffect, useState } from "react";

import databasesservice from "../appwrite/databaseService";
import { Container, GlyphCard } from "../component";

const AllGlyphs = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {}, []);
  databasesservice.getPosts([]).then((posts) => {
    if (posts) {
      setPosts(posts.documents);
    }
  });
  return (
    <Container>
      <div className=" flex flex-wrap gap-5">
        {posts.map((post) => (
          <div key={post.$id} className="p-2 ">
            <GlyphCard {...post} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default AllGlyphs;
