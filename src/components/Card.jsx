import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { videoplay } from '../reducer';

const Card = ({item}) => {
   
  // const isLoading=true
  const dispatch = useDispatch();
  return (
    <Link
    to={`/video/${item.id}`}
    className="text-white p-3 bg-slate-900"
    onClick={() => dispatch(videoplay(item.id))}
  ><div  className='h-auto sm:h-[280px] md:h-[400px]'>

    <div>
      <img
        src={item.artworkUrl}
        alt={item.title}
        width="100%"
        height="300px"
        />
    </div>
    <div>{item.full_name}</div>
    <div>{item.title}</div>
    <div className="flex justify-between mt-10">
      <div>{item.duration}</div>
      <div>{item.playback_count}</div>
    </div>
        </div>
  </Link>

  )
}

export default Card
