import { useState, useEffect } from "react";
import bookServices from "../../services/book.services";


export default function AddBook(){
    

    const [BookDetails,setBookDetails] = useState({title:'',author:'',status:''});
    const [messages,setMessages] = useState({error:false,msg:''});

    function handleTitle(e){
        setBookDetails({
            title:e.target.value,
            author:BookDetails.author,
            status:BookDetails.status
        })

    }

    function handleAuthor(e){
        setBookDetails({
            title:BookDetails.title,
            author:e.target.value,
            status:BookDetails.status
        })
    }
    function handleStatus(e){

        setBookDetails({
            title:BookDetails.title,
            author:BookDetails.author,
            status:e.target.innerText,
        })

    }
    const handleAdd = async(e)=>{
        console.log(BookDetails);

        e.preventDefault();
        setMessages("");
        if (BookDetails.title === "" || BookDetails.author === ""){
            setMessages({error: true,msg: 'Enter Title and Author'});
            return;

        }
        console.log(BookDetails);
        try {
            await bookServices.addBooks(BookDetails);
            setMessages({error:false,msg:'Added!'});
        } catch (error) {
            setMessages({error:true,msg:error.msg});

        }
        setBookDetails({
            title:"",
            author:"",
            status:"",
        })
    }
    console.log("msg "+messages.msg);

    // useEffect(()=>{
       
    // })

    return (

        <div className="container">
            <h2>Books</h2>
            {messages?.msg && (
                <span className={messages?.error ? "text-danger":"text-success"} dismissible onClose={()=>setMessages("")}>
                    {messages.msg}
                </span>
            )}
            <form onSubmit={handleAdd}>
            <dl>

                <dt>Title</dt>
                <dd><input type="text" onChange={handleTitle} value={BookDetails.title}/> </dd>

                <dt>Author</dt>
                <dd><input type="text" onChange={handleAuthor} value={BookDetails.author}/> </dd>
                
                <dt>Status</dt>
               
                <dd> 
                <label className="btn btn-success"   onClick={handleStatus}>Available</label>
                <label className="btn btn-danger" onClick={handleStatus}>Unavailable</label>

                </dd>
            </dl>
            <button className="btn btn-primary">Add Book</button>
            
            </form>
    </div>
    )
}