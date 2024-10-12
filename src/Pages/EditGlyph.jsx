import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import databasesservice from "../appwrite/databaseService";
import { Container, GlyphForm } from "../component";

const EditGlyph = () => {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      databasesservice.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);
  return post ? (
    <Container>
      <GlyphForm post={post} />
    </Container>
  ) : null
};

export default EditGlyph;
