import React from "react";
import CountUp from 'react-countup';
import {useInView} from 'react-intersection-observer';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants'
const About = () =>{
    const [ref, inView] = useInView({
        threshold: 0.5,
    });

    return (
        <section className="section" id="about" ref={ref}>
            <div className="container mx-auto">
                <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
                    <motion.div 
                    variants={fadeIn('right' , 0.3)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.3}}
                    className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"></motion.div>
                    <div className="flex-1">
                        <h2 className="h2 text-accent">Sobre min.</h2>
                        <h3 className="h3 mb-4">Eu sou estudante de programação a mais de 6 anos</h3>
                        <p className="mb-6">Atualmente eu estou na UFLA</p>
                        <motion.div className="flex" 
                            variants={fadeIn('left' , 0.5)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{once: false, amount: 0.3}}
                        >
                            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
                                <div className="text-[40px] font-tertiary text-gradient mb-2">
                                    {inView? <CountUp start={0} end={6} duration={2}/> :null}
                                </div>
                                <div className="font-primary text-sm tracking-[2px]">
                                    Anos de <br/>
                                    experiencia 
                                </div>
                            </div>
                            <div>
                                <div className="text-[40px] font-tertiary text-gradient mb-2">
                                    {inView? <CountUp start={0} end={6} duration={2}/> :null}
                                    K+
                                </div>
                                <div className="font-primary text-sm tracking-[2px]">
                                    Projetos <br/>
                                    Completados 
                                </div>
                            </div>
                            <div>
                                <div className="text-[40px] font-tertiary text-gradient mb-2">
                                    {inView? <CountUp start={0} end={6} duration={2}/> :null}
                                    K+
                                </div>
                                <div className="font-primary text-sm tracking-[2px]">
                                    Anos de satisfação<br/>
                                    dos meus trabalhos 
                                </div>
                            </div>
                        </motion.div>
                        <div className="flex gap-x-8 items-center">
                            <button className="btn btn-lg">Meu contado</button>
                            <a href="https://github.com/GabrielNathan12" className="text-gradient btn-link">Meu Github</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>)
}

export default About;