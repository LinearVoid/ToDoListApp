
export default function TaskList(props){
    let tasks = props.list
    console.log(props.list)
    return(
        
        tasks.map((item,index) => <p key = {index}>{item}</p> )


    )
    


}