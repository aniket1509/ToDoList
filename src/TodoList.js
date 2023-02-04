import React, { useState } from 'react'

function TodoList() {

    const[activity, setActivity] = useState("")
    const[listData, setListData] = useState([])

    function typeActivity(event){
      setActivity(event.target.value)
    }

    function addActivity(){
      setListData([...listData, activity])
      console.log(listData);
      setActivity('')
    }

    function removeActivity(i){
      setListData(listData.filter((element,id)=>{
        return i!=id
      }))
    }

    function removeAllFunction(){
      setListData([])
    }

  return (
    <>
        <div className='container'>
            <div className='header'>TODO LIST</div>
            <input type="text" placeholder='Add activity' value={activity} onChange={typeActivity} />
            <button onClick={addActivity}>Add</button>
            <p className='list-heading'>My todo list</p>
            {listData!=[] && listData.map((data,i)=>{
              return(
                <>
                  <p key={i}>
                    <div className="listData">{data}</div>
                    <div className='btn-position'>
                      <button onClick={()=>removeActivity(i)}>Remove(-)</button>
                    </div>
                  </p>
                </>
              )
            })}
            {listData.length>=1 && <button onClick={removeAllFunction}> Remove all</button>}
            
        </div>
    </>
  )
}

export default TodoList