import React, { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { TodoListContext } from '../../../../App';
import PaginationCpn from '../Pagination/Pagination';

export default function AllTask() {
   const [todoList, setTodoList] = useContext(TodoListContext)
   const [page, setPage] = useState(1)
   const [status, setStatus] = useState('new')
   const [actionstatus, setActionstatus] = useState('Start')
   // const navigate = useNavigate()
   // const handleTaskDetail = (item) => {
   //    navigate(`/task-detail/${item.id}`, { state: { ...item } })
   // }
 function handleClickStatus(){
 if(status === 'new' && actionstatus === 'Start' ){
   setStatus('Done')
   setActionstatus('Doing')  
   console.log(handleClickStatus)
 } else if (status === 'Done' && actionstatus === 'Doing'){
   setStatus('Renew')
   setActionstatus('Done')  
 } else if (status === 'Renew' && actionstatus === 'Done'){
   setStatus('new')
   setActionstatus('Start')
 }
 }
   return (
      <>
         <div className='all-task'>
            {todoList.map((item, index) => {
               return (
                  <div  className="task-item">
                     <b>Title: {item.title}</b>
                     <p>Creator: {item.creator}</p>
                     <b className={`status ${item.status}`}>Status:{status}</b>
                     <p className='desc'><b>Description:</b>{item.description}</p>
                     <button className='start' onClick={handleClickStatus}>{actionstatus}</button>
                  </div>
               )
            })}
         </div>
         <PaginationCpn onChange={(value) => setPage(value)}></PaginationCpn>
      </>
   )
}