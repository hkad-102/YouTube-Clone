import React,{useState, useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player/youtube'
import { BsFillCheckCircleFill, BsThermometer, BsThreeDots } from "react-icons/bs";
import { BiLike, BiDislike, BiShare } from 'react-icons/bi'
import {RiMenuAddFill} from 'react-icons/ri'

import { abbreviateNumber } from "js-abbreviation-number";

import { fetchDataFromApi } from '../utils/api'
import { Context } from '../context/contextApi';
import SuggestionVideoCard from './SuggestionVideoCard'

const VideoDetails = () => {
  const [video, setVideo] = useState();
  const [relatedVideo, setRelatedVideo] = useState();
  const { id } = useParams();
  const { setLoading } = useContext(Context);
  useEffect(() => {
    document.getElementById('root').classList.add('custom-h')
    fetchVideoDetails();
    fetchRelatedVideo();

  }, [id]);


  const fetchVideoDetails = () => {
    setLoading(true);
    fetchDataFromApi(`video/details/?id=${id}`).then((response) => {
      console.log(response);
      setVideo(response)
      setLoading(false);
    })
  }
  const fetchRelatedVideo = () => {
    setLoading(true);
    fetchDataFromApi(`video/related-contents/?id=${id}`).then((res) => {
      console.log(res);
      setRelatedVideo(res);
      setLoading(false);
    })
  }


  return (
    <div className='flex flex-row justify-center h-[calc(100%-56px)] bg-black'>
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row">
        <div className='flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto'>
          <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
            <ReactPlayer 
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              width="100%"
              height="100%"
              style={{ backgroundColor: "#000"}}
            />
          </div>

          <div className="text-white font-bold text-sm md:text-xl mt-4 line-clamp-2">
            {video?.title}
          </div>

          {/* channel name logo and subscriber*/}
          <div className="flex justify-between flex-col md:flex-row mt-4">
            <div className="flex">
              {/* icon */}
              <div className="flex items-start">
                <div className="h-11 w-11 rounded-full overflow-hidden">
                  <img src={video?.author?.avatar[0]?.url}  className='h-full w-full object-cover' alt="" />
                </div>
              </div>

              {/* name and subsriber */}
              <div className="flex flex-col ml-3">
                <div className="text-white text-md font-semibold flex items-center">
                  {video?.author?.title}
                  {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                    <BsFillCheckCircleFill className='text-white/[0.5] text-[12px] ml-1' />
                  )}
                </div>
                <div className='text-white/[0.7] text-sm'>
                    {video?.author?.stats?.subscribersText}
                </div>
              </div>

              {/* <div className='flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]'>
                <button onClick={() => setSubscribe(prev => !prev)} className='text-white'>{subscribe === true ? 'Subscribed' : "Subscribe"}</button>
              </div> */}
            </div>

            <div className="flex text-white md:mt-0 font-bold gap-4">
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]">
                <BiLike className='text-xl text-white mr-2'/>
                {`${abbreviateNumber(video?.stats?.views, 2)}`}
                <div className='px-2 font-thin text-4xl text-white/[0.3] self-stretch'>|</div>
                <BiDislike className='text-xl text-white ml-2'/>
              </div>

              <div className="flex items-center justify-center h-11 px-4 rounded-3xl bg-white/[0.15]">
                <BiShare className='text-xl text-white mr-1 scale-x-[-1]'/>
                <div className='text-white'>Share</div>
              </div>

              <div className="flex items-center justify-center h-11 px-4 rounded-3xl bg-white/[0.15]">
                <RiMenuAddFill className='text-xl text-white mr-1'/>
                <div className='text-white'>Save</div>
              </div>

              <div className="flex items-center justify-center h-11 px-4 rounded-full bg-white/[0.15]">
                <BsThreeDots className='text-xl text-white'/>
              </div>
            </div>
          </div>

          <div className='flex items-start mt-10 text-white font-bold'>
            <div className="flex items-center justify-center h-11 px-6 rounded-xl bg-white/[0.15] ml-4">
                  {`${abbreviateNumber(
                      video?.stats?.views,
                      2
                  )} Views`}
                  {video?.publishedTimeText}
            </div>
          </div>
        </div>

        <div className="flex flex-col py-6 px-4 overflow-y-auto lg:w-[350px] xl:w-[400px]">
          {relatedVideo?.contents?.map((item, index) => {
            if(item?.type !== 'video') return false
            return (
              <SuggestionVideoCard key={index} video={item?.video}/>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default VideoDetails
