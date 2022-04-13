import Post from '../post/Post';
import './posts.css';

export default function Posts(props) {
  return (
    <>
      <div className="posts">
        {props.posts.map((p) => {
          return <Post key={p.id} post={p} />;
        })}
      </div>
    </>
  );
}
