import { ThumbsUp, Trash, ThumbsDown } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment}: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    });
  }

  function handleDislikeComment() {
    if (likeCount <= 0) {
      return
    } else {
    setLikeCount(likeCount - 1);
  }
  }
  

  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/shyumi123.png"/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header className={styles.header}>
            <div className={styles.authorAndTime}>
              <strong>Danilo Arrotéia</strong>
              <time title="11 de Maio ás 8h13" dateTime="2022-05-11 08:13:21">
                Cerca de 1h atrás.
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar Comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <div className={styles.commentLike}>
            <button onClick={handleLikeComment}>
              <ThumbsUp size={20} />
              Aplaudir <span>{likeCount}</span>
            </button>

            <button onClick={handleDislikeComment}>
              <ThumbsDown size={20} />
              Desaplaudir 
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
