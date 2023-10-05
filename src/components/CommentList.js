import Comment from "./Comment";

/** CommentList: shows list of comments passed down as porps.
 *
 * Comments can be deleted by clicking nex to them.  This is handled by the parent.
 */

function CommentList({ comments = [], deleteComment }) {
  return comments.map((c) => (
    <Comment key={c.id} id={c.id} text={c.text} deleteComment={deleteComment} />
  ));
}

export default CommentList;
