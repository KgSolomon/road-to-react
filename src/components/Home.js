import style from "./Home.module.css"
import { Link } from "react-router-dom"

function Home() {
  return (
    <div  className={style.container}>
      <h1>Task List application</h1>
      <div>
        <Link to={"/new"}>
          <button className={style.button}>Create List</button>
        </Link>
      </div>
    </div>
  )
}

export default Home