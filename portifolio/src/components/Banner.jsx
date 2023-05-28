import React from "react";
//Imagens 
import Image from '../assets/Akaza.jpg';
import {FaGithub, FaYoutube, FaDribbble} from 'react-icons/fa';
//Tipo de animacao
import {TypeAnimation} from 'react-type-animation';
//Movimentacao

import {motion} from 'framer-motion';
// variates
import {fadeIn} from '../variants';

const Banner = () =>{
    return (
            <section className="min-h-[85vh] lg:min-h-[78vh] flex items-center " id="home">
                <div className="contaiver mx-auto">
                    <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
                        {/**/}
                        <div className="flex-1 text-center font-secondary lg:text-left">
                            <motion.div variants={fadeIn('up' , 0.3)} initial="hidden" whileInView={'show'} viewport={{once:false , amount: 0.7}} className="text=[55px] font-bold leading-[0.8] lg:text-[110px]">Gabriel
                                <span>Nathan</span>
                            </motion.div>
                            <div className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
                                <span className="text-blue-400 mr-4">Eu sei</span>
                                <TypeAnimation sequence={[
                                    'desenvolvimento full-stack',
                                    2000,
                                    'trabalhar com o Front-end',
                                    2000,
                                    'trabalhar com o Back-end',
                                    2000,
                                    ]
                                }
                                speed={60} className="text-accent" wrapper="span" repeat={Infinity}
                            />
                            <motion.p variants={fadeIn('up' , 0.3)} initial="hidden" whileInView={'show'} viewport={{once:false , amount: 0.7}} className="mb-8 max-w-lg mx-auto lg:mx-0">Eu sou estudante de Ciência da Computação pela UFLA,
                                    tenho 23 anos.
                                <p>Tecnologias que eu estudo: React, Laravel.</p>
                                
                            </motion.p>
                            <motion.div variants={fadeIn('up' , 0.7)} initial="hidden" whileInView={'show'} viewport={{once:false , amount: 0.7}} className="flex  max-w-max gap-x-6 items-center mb-12 ax-auto lg:mx-0" >
                                <button className="btn btn-lg">Entre em contado</button>
                                <a href="https://github.com/GabrielNathan12" className="text-gradiend btn-link">Meu GitHub</a>
                            </motion.div>
                            <motion.div variants={fadeIn('up' , 0.7)} initial="hidden" whileInView={'show'} viewport={{once:false , amount: 0.7}} className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
                                <a href="#">
                                    <FaYoutube/>
                                </a>
                                <a href="#">
                                    <FaGithub/>
                                </a>
                                <a href="#">
                                    <FaDribbble/>
                                </a>
                            </motion.div>
                            </div>
                        </div>
                        <motion.div variants={fadeIn('down' , 0.7)} initial="hidden" whileInView={'show'}  className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[420px]">
                            <img src={Image}></img>
                        </motion.div>
                        
                    </div>
                </div>
            </section>
    )
}

export default Banner;