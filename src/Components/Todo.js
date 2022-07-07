import React, { Component } from 'react'

export default class Todo extends Component {
  
    constructor(){
        super();
        this.state={
            tasks:[
                {id:1,task:"Revise JS"},
                {id:2,task:"Revise DSA Level-1"},
            ],
            curTask: "",
        }
    }


  handleSubmit = () => {
    this.setState({
      tasks: [
        ...this.state.tasks,
        { task: this.state.curTask, id: this.state.tasks.length + 1 },
      ],
      curTask: "",
    });
  };

   
    
    handleChange=(e)=>{
      // console.log(e.target.value);
      this.setState({
        curTask:e.target.value,  
        //typed text is being fetched from here 
      })
    } 

    handleDelete=(id)=>{
      let updatedTodo=[];
      updatedTodo=this.state.tasks.filter((taskObj)=>{
          return taskObj.id !=id
      })

      console.log(updatedTodo);

      this.setState({
        tasks:[...updatedTodo]
      })
    }
    
    

    render(){
      // console.log("render method is called as the state changes");
      return (
       
        <div>
          <input type="text" value ={this.state.curTask} onChange={this.handleChange}/>
          <button onClick={this.handleSubmit}>Submit</button>
          {// use when need to write js in jsx
            // this.state.tasks.map((taskObj)=>{
            //   return(
            //     //each child in list should have unique key property ,that is why 
            //     // we have wrapped each element with an <li> tag, it will beeasier for js to just get the idea ki kis id ka element ko delete karna hai
            //     //  always remember , to pass a argument in a function using onClick we are  required to use arrow functons this way
            //     <li key={taskObj.id}>
            //       <p>{taskObj.task}</p>
            //       <button onClick={()=>{this.handleDelete(taskObj.id)}}>Delete</button>
                
            //     </li>
            //   );
              this.state.tasks.map(function(taskObj){
                return(
                  //each child in list should have unique key property ,that is why 
                  // we have wrapped each element with an <li> tag, it will beeasier for js to just get the idea ki kis id ka element ko delete karna hai
                  //  always remember , to pass a argument in a function using onClick we are  required to use arrow functons this way
                  <li key={taskObj.id}>
                    <p>{taskObj.task}</p>
                    <button onClick={()=>{this.handleDelete(taskObj.id)}}>Delete</button>
                  
                  </li>
                  /* onClick should stores a function defintion then it runs, but if we pass an argument to a function then it will be called which we don't want 
                  bina click kare hi chal jayega onClick otherwise*/
                );
          
              }.bind(this))

              //arrow function takes parent's this
          }
        </div>
      )
    }
  
}
