import React from 'react';
import { FaGithub } from 'react-icons/fa';

const TabCart = ({ project }) => {
    const { name, photo, Github, client, server, title, live } = project;
    return (
        <div data-aos="zoom-in-down" className='mx-auto'>
            <div  className="card w-96 shadow-xl ">
                {/* <figure>
                    <img src={photo[0].img} alt="" className='h-[200px]' />
                </figure> */}
                <div className=" carousel carousel-vertical ">
                    <div className="carousel-item ">
                        {
                            photo.map(image => <img src={image.img} alt="" className='h-[200px] w-full cursor-pointer' />)
                        }
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="text-2xl font-sans text-center">
                        {name}
                    </h2>
                    <p>{title?.slice(0, 120)}...</p>
                    <div className="card-actions justify-center gap-5">
                        <a  className='p-2 text-white font-mono px-5 rounded bg-[#19D3AE] hover:bg-[#1f8672]' target="_blank" href={live}> Live</a>
                        {
                            Github ? <>
                                <a className='p-2 text-white font-mono px-5 py-3 rounded bg-[#19D3AE] hover:bg-[#115e4e]' target="_blank" href={Github}><FaGithub className=''></FaGithub></a>
                            </>
                                : <a className='p-2  text-white font-mono px-5 rounded bg-[#19D3AE] hover:bg-[#196959]' target="_blank" href={client}> Clint</a>
                        }
                        {
                            server ? <>
                                <a className='p-2 text-white font-mono px-5 rounded bg-[#19D3AE] hover:bg-[#176152]' target="_blank" href={server}> Server</a>

                            </>
                                : ""
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TabCart;