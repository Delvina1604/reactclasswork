function DisplayName(props)
{
    return (
        <div>
            <h1>
                {props.name}
            </h1>
        </div>
    )
}

export default function List1()
{
    const studentName=["Del","Ris","Rae"]
    const stName =studentName.map((stu)=><DisplayName name={stu}></DisplayName>)
    return (
        <div>
            {stName}
        </div>
    )
}