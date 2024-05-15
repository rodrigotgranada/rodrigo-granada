
import "./HomePage.scss"
import selfie from "./../../Assets/selfie.jpg"


const HomePage = () => {
    return (
        <>
            <div className="flex flex-col-reverse justify-evenly gap-y-8 pt-6 md:flex-row text-center md:pt-0 ">
                <div className="p-0 md:p-4 md:text-left">
                    <div className="text-7xl font-semibold">Olá!</div>
                    <div className="text-6xl">Me chamo <span className="text-textActive text-500">Rodrigo</span>.</div>
                    <div className="text-xl">Desenvolvedor Front-end.</div>
                </div>
                <div className="rounded ">
                    <img src={String(selfie)} alt="Eu" className="rounded-lg m-auto w-[9rem] md:w-[11rem]" />
                </div>
            </div>
            <div className="text-center">
                <div className="text-3xl">Deixe-me apresentar:</div>
                <div className="text-xl p-4 md:p-6">
                    <div className="text-justify indent-4 md:indent-12">Sou apaixonado por programação desde o primeiro dia de trabalho. Confesso que quando sai do ensino médio meu sonho era trabalhar com hardware (trocar memória, mexer na placa mãe e etc), porém o destino iria me levar para a programação, pois o primeiro curso que fiz era com ênfase em programação, grata surpresa.</div>
                    <div className="text-justify indent-4 md:indent-12">Desde então trabalho com software. Com muito prazer e vontade de realmente fazer a diferença por onde passo. Gosto e faço questão de trabalhar em equipe e de poder ajudar além da programação, dando sugestões de melhorias, tanto no design quanto em regras de negócio. Sempre pensando na qualidade final do sistema que será entregue e na satisfação do cliente.</div>
                    <div className="text-justify indent-4 md:indent-12">Este sou eu, participativo no contexto que estou inserido e prezando sempre pela qualidade máxima no que faço.</div>
                </div>
            </div>

        </>
    )
}

export default HomePage