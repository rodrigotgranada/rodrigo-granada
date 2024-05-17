import React from 'react'

export interface Skill {
    name: string;
    img?: string;
    link?: string;
}

interface Props {
    classes?: string;
    skill: Skill;
}

const CardFlip: React.FC<Props> = ({
    classes,
    skill,
}: Props): JSX.Element => {
    return (
        <div className="flex h-50 flex-col justify-center items-center bg-transparent">
            <div className="group h-[10rem] w-[10rem] [perspective:10rem]">
                <div className='relative ring-4 ring-textColor h-[10rem] w-[10rem] rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
                    {skill.img && (
                        <div className="absolute inset-0 flex justify-center">
                            <img alt={skill.name} loading="lazy" width="100" height="100" decoding="async" data-nimg="1" className="m-auto" src={String(skill.img)} />
                        </div>
                    )}

                    <div className="absolute inset-0 h-full w-full rounded-xl bg-black/40 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div className="flex min-h-full flex-col items-center justify-center">
                            <p className="text-xl">{skill.name}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CardFlip