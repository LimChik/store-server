
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <h1  style={{margin:'0 auto',maxWidth:'1350px',padding:'0 10px',textAlign:'center'} }>This page is not found <Link style={{color:'red'}} to='/' >Go home</Link></h1>
  )
}

export default NotFound