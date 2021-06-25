import { useDispatch, useSelector } from "react-redux";
import { Post } from "../components";
import { RootState } from "../redux/store";
import { Waypoint } from "react-waypoint";
import { useCallback, useEffect } from "react";
import { fetchPosts } from "../redux/postsSlice/postsSlice";

export const Main = () => {
  const posts = useSelector((state: RootState) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts(posts.data));
  }, [dispatch]);

  const showMorePosts = useCallback(() => {
    if (posts.prevData.length === posts.data.length) return;

    dispatch(fetchPosts(posts.data));
  }, [dispatch, posts]);

  return (
    <>
      {posts.data &&
        posts.data.map(
          (post: {
            _id: number;
            title: string;
            description: string;
            postedBy: number;
          }) => {
            return <Post key={post._id} post={post} />;
          }
        )}
      {posts.status === "loading" ? (
        <h1>Loading</h1>
      ) : (
        <Waypoint onEnter={() => showMorePosts()} />
      )}
    </>
  );
};
