import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { useState } from 'react';


export function Post ({id,author, publishedAt, content, comment}){
  const [comments, setComments] = useState([
    'Post muito bacana, hein!'
  ]);
  
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{
    locale: ptBR
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{
    locale: ptBR,
    addSuffix: true
  });

  const [newCommentText, setNewCommentText]=useState('');

  function handleCreateNewComment(){
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentChange(){
    setNewCommentText(event.target.value)
  }

  function deleteComment(commentToDelete){
    const commentsWhithoutDeleted = comments.filter(comment =>{
      return comment !== commentToDelete;
    })

    setComments(commentsWhithoutDeleted);
  }

  return(
   <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl}/>
          <div className={styles.info}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
        {content.map(line=>{
          if(line.type == 'paragraph'){
            return <p key={line.content}>{line.content}</p>; 
          }else if(line.type == 'link'){
            return <p key={line.content}><a href="">{line.content}</a> <a href="">{line.scontent}</a> <a href="">{line.tcontent} </a></p>;
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment}  className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>
        <textarea required value={newCommentText} name="comment" onChange={handleNewCommentChange} placeholder='Deixe um Comentário'/>
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment =>{
          return <Comment deleteComment={deleteComment} key={comment} content={comment}/>
        })}
      </div>
   </article>
  )
}