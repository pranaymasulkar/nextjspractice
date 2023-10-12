import React from 'react'
import MinaCount from './MinaCount'

import PersonContainer from "./objectdestrucring/PersonContainer";
import Postdata from './Postdata';
import Addtodo from "./todoapp/Addtodo"
import Binding from './todoapp/Binding';
import Sorting from './todoapp/Sorting';
const page = () => {
  return (
    <div>
      <Binding/>
     <Sorting/>
     <Addtodo/>
      {/* <Postdata/>
       <PersonContainer />
      <MinaCount/> */}
    </div>
  )
}

export default page