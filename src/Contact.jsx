import React,{useState}from 'react';

const Contact = () => {

  const [data,setData] = useState({
    fullname: '',
    email: '',
    number:'',
    msg:'',
  });

  const formSubmit = (e) =>{
    e.preventDefault();
    
    alert(`my name is ${data.fullname} and my email is ${data.email} and my mobile number is ${data.number} and msg is ${data.msg}.`)

  };
  const inputEvent = (event) =>{
    const {name,value} = event.target;
    console.log(name,value);
    setData((preVal)=>{
      return{
        ...preVal,
        [name] : value,
      }
    });
  }
  return (
    <>
    <div className="my-5">
      <h1 className="text-center">Contact US</h1>
    </div>
    <div className="container contact-div">
      <div className="row">
          <div className="col-md-6 col-10 mx-auto">
              
          <form onSubmit={formSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputName1" className="form-label">Full Name</label>
    <input type="text" className="form-control" id="exampleInputName1"  name="fullname" value={data.fullname} onChange={inputEvent}/>
    <div id="emailHelp" className="form-text">Please type your Fullname.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={data.email} onChange={inputEvent}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputMobile1" className="form-label">Mobile Number</label>
    <input type="number" className="form-control" id="exampleInputMobile1" name="number" value={data.number} onChange={inputEvent} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputMsg1" className="form-label">Message</label>
    <textarea type="Message" className="form-control" id="exampleInputMsg1" name="msg" value={data.msg} onChange={inputEvent} />
  </div>
  
  <button type="submit" className="btn btn-outline-primary px-4">Submit</button>
</form>


          </div>
      </div>
    </div>
    </>
  )
  }
  
  export default Contact;
  