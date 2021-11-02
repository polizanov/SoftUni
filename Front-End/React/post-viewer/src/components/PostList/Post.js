import './Post.css'

function Post(props){
    if(!props.title) {
        return  <p className='no-data'>No title</p>
       
    }

    if(!props.description) {
       return  <p className='no-data'>No Description</p>
    }


    return (
        <article onClick={(e) => {e.target.parentElement.className="clicked"}}>
            <p>{props.title}</p>
            <p>{props.description}</p>
        </article>
    )
}

export default Post;