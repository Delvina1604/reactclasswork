import React from 'react'

export default function List2()
{

    const college=[{id:1,stuName:"Del",age:20},
                  {id:2,stuName:"Ris",age:14},
                  {id:3,stuName:"Rae",age:21},]


const display=college.map((col)=><li key={col.id}> {col.stuName} {col.age}</li>)
return (
    <div>
        <h1>
            List of Students
        </h1>
        {display}
    </div>
)



}