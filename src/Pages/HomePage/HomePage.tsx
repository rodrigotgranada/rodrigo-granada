
import "./HomePage.scss"
import selfie from "./../../Assets/selfie.jpg"


const HomePage = () => {
    return (
        <div className="flex flex-col-reverse justify-evenly md:flex-row text-center">
            <div className="p-4  md:text-left">
                <div className="text-7xl font-semibold">Olá!</div>
                <div className="text-6xl">Me chamo <span className="text-red-500">Rodrigo</span>.</div>
                <div className="text-xl">Desenvolvedor Front-end.</div>
            </div>
            <div className="rounded ">
                <img src={String(selfie)} alt="Eu" className="rounded-lg m-auto w-[11rem]" />
            </div>

        </div>
    )
}

export default HomePage