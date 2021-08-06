import React from 'react'
import "./Definitions.css"

const Definitions = (props) => {
    return (
        <div className='meanings'>
        {props.meanings[0] && props.word && props.category === 'en' && (
            <audio src={props.meanings[0].phonetics[0] && props.meanings[0].phonetics[0].audio}
            style={{backgroundColor: "#fff",borderRadius: 10}}
            controls
            >
            Your browser doesn't support audio content.
            </audio>
        ) }


           {props.word===""?<span className='subTitle'>Start by typing a word in Search</span>: props.meanings.map((mean) => (mean.meanings.map((item) => (item.definitions.map((def)=> (<div className="singleMean" style={{backgroundColor:props.LightMode?"#393E46" : "white",color: props.LightMode? "white" : "black"}}><b>{def.definition}</b><hr style={{backgroundColor:"black",width:"100%"}} />{def.example && (<span><b> Example : </b> {def.example} </span>)}{def.synonyms && (<span><b>Synonyms : </b> {def.synonyms}</span>)} </div>)))))) }
        </div>
    )
}

export default Definitions
