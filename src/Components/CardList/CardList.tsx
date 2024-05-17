import React from 'react'
import Card from '../Card/Card';
import CardFlip from '../CardFlip/CardFlip';

type Types = 'social' | 'skill'

export interface Skill {
    name: string;
    img?: string;
    link?: string;
}

interface Props {
    ListClasses: Types;
    CardClasses: string;
    skills: Skill[];
}

function getListType(type: string): string {
    let finalClass = ""
    if (type === 'social') {
        finalClass = "flex flex-col md:flex-row justify-evenly gap-10"
    } else {
        finalClass = "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 text-center"
    }
    return finalClass
}

const CardList: React.FC<Props> = ({
    ListClasses,
    CardClasses,
    skills
}: Props): JSX.Element => {
    return (
        <div className={getListType(ListClasses)}>
            {skills.map((skill, index) => {
                if (skill.img) {
                    if (ListClasses === "social") {
                        return <Card key={index} classes={CardClasses} skill={skill} />
                    } else {
                        return <CardFlip key={index} skill={skill} />
                    }
                } else {
                    return <Card key={index} classes={CardClasses} skill={skill} />
                }
            })}
        </div>
    )
}

export default CardList