/** Comment: shows comment
 *
 * Comments can be deleted by clicking next to them.  This is handled by parent.
 */

function Comment({ deleteComment, text, id }) {
  function handleDelete(e) {
    deleteComment(id);
  }

  return (
    <div>
      <p>
        {deleteComment && (
          <i className="fa fa-times text-danger mr-2" onClick={handleDelete} />
        )}

        {text}
      </p>
    </div>
  );
}

export default Comment;
