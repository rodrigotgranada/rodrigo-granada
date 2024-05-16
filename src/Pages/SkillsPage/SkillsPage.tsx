import CardList from "../../Components/CardList/CardList"
import { softSkills, hardSkills } from "../../Utils/constants"

const SkillsPage = () => {
    return (
        <>
            <div className="text-3xl text-center">Soft Skills</div>
            {softSkills && softSkills.length > 0 && (
                <CardList skills={softSkills} ListClasses="skill" CardClasses="py-4 px-2 w-full mx-auto flex flex-col cursor-pointer justify-between gap-2 rounded-lg bg-cardBgColor ring-4 ring-textColor ring-400 hover:ring-textColor hover:ring-6s00 transition ease-in-out hover:-translate-y-1 hover:scale-110" />
            )}
            <div className="text-3xl text-center">Hard Skills</div>
            {hardSkills && hardSkills.length > 0 && (
                <CardList skills={hardSkills} ListClasses="skill" CardClasses="py-4 px-2 w-full mx-auto flex flex-col cursor-pointer justify-between gap-2 rounded-lg bg-cardBgColor ring-4 ring-textColor ring-400 hover:ring-textColor hover:ring-6s00 transition ease-in-out hover:-translate-y-1 hover:scale-110" />
            )}
        </>
    )
}

export default SkillsPage