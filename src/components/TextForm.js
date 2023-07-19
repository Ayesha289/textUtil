import React, {useState} from 'react'

export default function TextForm(props){
    const [text, setText] = useState("");
    const onEventChange = (event) => {
        setText(event.target.value);
    }
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Successfully converted to upper case!", "success");
    }
    const handleDownClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Successfully converted to lower case!", "success");
    }
    const handleSpaceClick = ()=>{
        let newText = text.toLowerCase();
        newText = newText.replace(/\s+/g, ' ').trim()
        setText(newText);
        props.showAlert("Successfully removed spaces!", "success");
    }
    const handleCopy =()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard!", "success");

    }
    const handleClearClick = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Cleared!", "success");
    }
    return (
        <>
            <div className="container my-3">
                <h1>{props.heading}</h1>
                <div class="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
                    <textarea className ="form-control" id="exampleFormControlTextarea1" value={text} onChange={onEventChange} rows="8" style={{backgroundColor: props.mode==='light'?'white':props.mode==='blue'?'#213363':props.mode==='grey'?'#526D82':'#212529', color: props.mode==='light'?'black':'white'}}></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Upper Case</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleDownClick}>Lower Case</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleSpaceClick}>Remove Spaces</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element) => {return element.length !== 0} ).length} words {text.length} characters</p>
                <p>{0.008 * [text.split(" ").filter((element) => {return element.length !== 0} ).length]} minutes read </p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to preview!"}</p>
            </div>
        </>
    )
}