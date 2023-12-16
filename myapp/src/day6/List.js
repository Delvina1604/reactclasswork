export default function List()
{
    const animals =["dog","cat","lion","tiger"]
    const result =animals.map((ani,index)=><li key={index}>{ani}</li>)
    return (
        <div>
            <ul>
                {result}
            </ul>
        </div>
    )

}