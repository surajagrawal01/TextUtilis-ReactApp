import React,{useState} from "react"; //to import React from react


export default function TextForm(props) {    //export and defining function textForm
const handleUpClick = ()=>{  //handleUpCLick function to transform text into upperCase
        // console.log("UpperCase CLicked"+ text);
        let newText = text.toUpperCase();  //to convert text into uppercase
        setText(newText);  //to set text value
        props.alert("Converted to uppercase","success") ; //to pass the value of argument for function showalert with alert props As soon as this function will work then alert will apear with the following message
        // document.title="TextUtilis - Uppercase"; ////=>To change the title of webApp dynamically (but it is not good for user experience)
}
const handleLoClick = ()=>{  //handleLoCLick function to transform text into loweracse
        // console.log("Loweracse CLicked"+ text);
        let newText = text.toLowerCase();  //to convert text into loweracse
        setText(newText);  //to set text value 
        props.alert("Converted to lowercase","success") ;//to pass the value of argument for function showalert with alert props As soon as this function will work then alert will apear with the following message

}
const handleCapitalizeClick = ()=>{  //to transform text into capitalize text
        let arr = text.split(" "); ////=>First split text into array of words with the help of space( by taking space as refrence to split whole text intpo array of words)

        for(let x=0; x<arr.length;x++){
             arr[x] = arr[x].charAt(0).toUpperCase() + arr[x].slice(1).toLowerCase(); //then first letter of each word to uppercase and remaning on the lower case
        } 
        let newText = arr.join(" ");  ////=>joining each items of array of words into one text by applying space bewteen the items in the final value
        setText(newText);  //to set text value 
        props.alert("Text Capitalized","success") ;  //to pass the value of argument for function showalert with alert props As soon as this function will work then alert will apear with the following message

}
const handleCopyClick = ()=>{  //to copy text 
    var text = document.getElementById("myBox");
    text.select(); //to select all content inside the box
    navigator.clipboard.writeText(text.value); //copy that content into clipboard
    props.alert("Copied to ClipBoard","success") ; //to pass the value of argument for function showalert with alert props As soon as this function will work then alert will apear with the following message

}
const handleExtraSpaceClick = ()=>{  //to copy text 
    let splitText = (text.split(" "));
    console.log(splitText);
    console.log(splitText.join(" "))
    
    let newText = text.split(/[ ]+/); //Using (regex to find one or more than one space) .split (to split words having one or more than one space in array)
    setText(newText.join(" ")) //Then joined words that with one space
    props.alert("Removed extraSpaces","success") ; //to pass the value of argument for function showalert with alert props As soon as this function will work then alert will apear with the following message

} 
const handleCleatTextClick = ()=>{  //to clear text in box
        let newText = '';  //to clear text (variable becomes empty)
        setText(newText);  //to set text value 
}
const handleOnChange = (event)=>{
        // console.log("UpperCase onChange");
        setText(event.target.value);  //to get text we entered into the box or allow to xhange text
}

    const[text, setText] = useState('');  //created a new text state variable 
    // /text="Newtext"; //=> Wrong way to change the text
    // setText("Hello New text"); //=> Right way to change the text
    return (
        <>
        <div className="conatiner" style={{
            color: props.mode === 'light' ? 'black':'white'  //First curly bracket for Javascript, Second for object and color property changes iwth the help of mode prop using ternary opeartor (if true then color will be black and if false then color will be white)
        }}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* value = {text} will make the text value in the box and onChange = {handleOnChange} will allow us to change text inside tetxaraea  */}
                <textarea className="form-control" style={{
            backgroundColor: props.mode === 'light' ? 'white':'grey',  //First curly bracket for Javascript, Second for object and backgroundColor property changes iwth the help of mode prop using ternary opeartor
            color: props.mode === 'light' ? 'black':'white' //First curly bracket for Javascript, Second for object and color property changes iwth the help of mode prop using ternary opeartor
            }}
             value={text} onChange={handleOnChange} 
                 id="myBox" rows="8"></textarea>
            </div>
            {/* onClick={handleUpClick}=> onClick event will call handleUpClick function which will change text to uppercase */}
            <button className={`btn btn-${props.btnColor}`} onClick={handleUpClick} > 
                Convert to Uppercase 
            </button>
            {/* To add button for changing text in lowercase*/}
            <button className={`btn btn-${props.btnColor} mx-2`} onClick={handleLoClick} > 
                Convert to Lowercase 
            </button>
            {/* To capitalize text */}
            <button className={`btn btn-${props.btnColor} mx-2`} onClick={handleCapitalizeClick} > 
                Convert to capitalize
            </button>
            {/* To copy text */}
            <button className={`btn btn-${props.btnColor} mx-2`} onClick={handleCopyClick} > 
                Copy Text
            </button>
            {/* to remove extra space */}
            <button className={`btn btn-${props.btnColor} my-2`} onClick={handleExtraSpaceClick} > 
                Clear Extra Space
            </button>
            {/* To clear text */}
            <button className={`btn btn-${props.btnColor} my-2 mx-2`} onClick={handleCleatTextClick} > 
                Clear text
            </button>
        </div>
        <div className="container my-3" style={{
            color: props.mode === 'light' ? 'black':'white'   //First curly bracket for Javascript, Second for object and color property changes iwth the help of mode prop using ternary opeartor
        }}>
            <h1>Your text summary </h1>
            {/* text.split(" ").length = > To claculate no of words (split text with the help of space and stored them as items in array  and then count the no of items ) */}
            {/* text.length = to get no of characters */}
            <p>{text.split(" ").length} words and {text.length} Characters</p>
            {/* To calcualte time taken to react the text -> one word takes 0.008 minutes */}
            <p>Time Period to read text: {.008 * text.split(" ").length} minutes</p>
            <h2>Preview</h2>
            {/* to add preview */}
            <p>{text.length>0 ?text:"Enter something in the textbox to preview here"}</p>
        </div>
        </>
    )
}