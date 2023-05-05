import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'
import {PencilSimpleLine} from 'phosphor-react'

export function Sidebar(){
  return(
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=100"/>
      <div className={styles.profile}>
        <Avatar src="https://media.licdn.com/dms/image/D4D03AQFCIYKnR7UcRA/profile-displayphoto-shrink_800_800/0/1668462104602?e=1688601600&v=beta&t=DoBnhVGUvwht1ucv9Cc9KVQxeLrzylHr-wuA9am7Lks"/>
        <strong>Roberto Junior</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilSimpleLine size={20}/>
          Editar seu perfil</a>
      </footer>
    </aside>
  )
}