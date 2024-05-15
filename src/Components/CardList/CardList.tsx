import React from 'react'
import Card from '../Card/Card';
export interface Skill {
    name: string;
    img?: string;
}

interface Props {
    skills: Skill[];
}

const CardList: React.FC<Props> = ({
    skills
}: Props): JSX.Element => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 text-center">
            {skills.map((skill, index) => {
                return <Card key={index} classes="py-4 px-2 w-full mx-auto flex flex-col cursor-pointer justify-between gap-2 rounded-lg bg-cardBgColor ring-4 ring-textActive ring-400 hover:ring-textActive hover:ring-6s00 transition ease-in-out hover:-translate-y-1 hover:scale-110" skill={skill} />
            })}
        </div>
    )
}

export default CardList