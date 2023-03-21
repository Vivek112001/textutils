import React,{useState} from 'react'

export default function Textform(props) {
    const[text,settext]=useState('')
    const upchange =()=>{
        let newText=text.toUpperCase();
      settext(newText)
      props.showAlert('Text has been converted in Uppercase', 'success');
    }
    const handleOnChange=(event)=>{
        settext(event.target.value)
    }
    const lowChange = () => {
      let newText = text.toLowerCase();
      settext(newText);
      props.showAlert("Text has been converted in Lowercase", "success");
    };
    const clearText= () => {
      settext('');
       props.showAlert("Text has been cleared", "success");
    };
    const copyText = () => {
      let text1=document.getElementById("myBox")
        text1.select();
        navigator.clipboard.writeText(text1.value)
         props.showAlert("Text has been copied to the clipboard", "success");
    };
    const remExtraSpace = () => {
        let newText = text.split(/[  ]+/);
        settext(newText.join(' '));
         props.showAlert("Extra spaces has been removed", "success");
    };
  return (
    <>
      <h1
        className="my-3"
        // style={{
        //   color: props.mode === "dark" ? "white" : "dark"
        // }}
      >
        {props.heading}
      </h1>
      <div className="mb-3">
        <textarea
          value={text}
          onChange={handleOnChange}
          className="form-control"
          id="myBox"
          style={{
            height: 300,
            // backgroundColor:
            //   props.mode === "dark" ? "rgb(136 143 177)" : "dark",color:props.mode==="dark"?"white":"dark"
          }}
        ></textarea>
      </div>
      <div onClick={upchange} className="btn btn-primary mx-2">
        Convert to Uppercase
      </div>
      <div className="btn btn-primary mx-2" onClick={lowChange}>
        Convert to Lowercase
      </div>
      <div className="btn btn-primary mx-2" onClick={clearText}>
        Clear Text
      </div>
      <div className="btn btn-primary mx-2 my-2" onClick={copyText}>
        Copy Text
      </div>
      <div className="btn btn-primary mx-2 my-2" onClick={remExtraSpace}>
        Remove Extra Spaces
      </div>
      <div className="container my-4">
        <h2>Your text summary </h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.08 * text.split(" ").length} minutes to read </p>
      </div>
    </>
  );
}

