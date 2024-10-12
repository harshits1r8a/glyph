import parse from "html-react-parser";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

import databaseService from "../appwrite/databaseService";
import storageService from "../appwrite/storageService";
import { Btn, Container } from "../component";

export default function Glyph() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      databaseService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);
  
  const deletePost = () => {
    console.log(post);
    databaseService.deletePost(post.$id).then((status) => {
      if (status) {
        storageService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <Container>
      <div className="w-full flex justify-center mb-4  border rounded-xl p-2">
        <img
          src={storageService.getFilePreview(post.featuredImage)}
          alt={post.title}
          className="rounded-xl object-cover"
        />

        {isAuthor && (
          <div className=" right-6 top-6">
            <Link to={`/edit-glyph/${post.$id}`}>
              <Btn  className="mr-3">
                Edit
              </Btn>
            </Link>
            <Btn  onClick={deletePost}>
              Delete
            </Btn>
          </div>
        )}
      </div>
      <div className="w-full mb-6">
        <h1 className="text-2xl font-bold">{post.title}</h1>
      </div>
      <div className="browser-css">{parse(post.content)}</div>
    </Container>
  ) : null;
}
