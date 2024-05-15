import React from 'react'
import "./Card.scss"

export interface Skill {
    name: string;
    img?: string;
}

interface Props {
    classes?: string;
    skill: Skill;
}

const Card: React.FC<Props> = ({
    classes,
    skill,
}: Props): JSX.Element => {
    return (
        <div className={`${classes}`}>
            {skill.img ? (
                <img alt={skill.name} loading="lazy" width="100" height="100" decoding="async" data-nimg="1" className="m-auto" src={String(skill.img)} />
            ) : (<></>)}

            {skill.name}

        </div>
    )
}

export default Card