import React from 'react'

function Newsitem(props) {
  const{urlToImage,title,description,url,publishedAt,author
  }= props
  return (
    <div className='pt-3' >
        <div className="card" style={{width: "18rem"}}>
  <img src= {!urlToImage?"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iHD_mhx6_P_k/v0/1200x778.jpg":urlToImage} className="card-img-top" alt=""/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>

    <p className="card-text">{!description?"my name is musharaf hussain .i am a web develpor":description}</p>
    <p class="card-text"><small class="text-muted">{publishedAt}</small></p>
     <h6 className=''>author:{!author?"Musharaf gujjar":author } </h6>
    <a href={url} className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  )
}

export default Newsitem