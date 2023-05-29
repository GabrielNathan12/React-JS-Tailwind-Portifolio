import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const services = [{
    name: 'UI/UX Design',
    description: 'Estudante de programacao',
    link: 'Sobre min',
},
{
    name: 'Desenvolvedor full-stack',
    description: 'Estudante de programacao',
    link: 'Sobre min',
},
{
    name: 'Back-end',
    description: 'Estudante de programacao',
    link: 'Sobre min',
},
{
    name: 'Front-end',
    description: 'Estudante de programacao',
    link: 'Sobre min',
}
];
const Services = () =>{
    return (
        <section className="section" id="services">
           <div className="container mx-auto">
                <motion.div variants={fadeIn('right' , 0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount:0.3}} className="flex flex-col lg:flex-row">
                    <div className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
                        <h2 className="h2 text-accent mb-6">O que eu faco </h2>
                        <h3 className="h3 max-w-[455px] mb-16">Qualquer voisa por enquanto</h3>
                    </div>
                    <motion.div  variants={fadeIn('left' , 0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount:0.3}} className="flex-1">
                        <div>{services.map((service, index) =>{
                            const {name , description, link} = service;
                            return (
                                <div className="border-b borde-white/20 mb-[38px] flex" key={index}>
                                    <div className="max-w-[476px]">
                                        <h4 className="text-[20px] font-primary font-semibold mb-6">{name}</h4>
                                        <p className="font-secondary leading-tight">{description}</p>
                                    </div>
                                    <di className="flex flex-col flex-1 items-end">
                                        <a href="#" className="btn w-9 h-9 mb-[42px] flex justify-center items-center">
                                            <BsArrowUpRight/>
                                        </a>
                                        <a href="#" className="text-gradient text-sm">{link}</a>
                                    </di>
                                </div>
                            );
                        })}
                        </div>
                    </motion.div>
                </motion.div>
            </div> 
        </section>)
}

export default Services;