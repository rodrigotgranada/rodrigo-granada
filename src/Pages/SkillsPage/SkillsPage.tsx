import Card from "../../Components/Card/Card"
import CardList from "../../Components/CardList/CardList"
import { softSkills, hardSkills } from "../../Utils/constants"

const SkillsPage = () => {
    return (
        <>
            <div className="text-3xl text-center">Soft Skills</div>
            {softSkills && softSkills.length > 0 && (
                <CardList skills={softSkills} />
            )}
            <div className="text-3xl text-center">Hard Skills</div>
            {hardSkills && hardSkills.length > 0 && (
                <CardList skills={hardSkills} />
            )}
        </>
    )
}

export default SkillsPage