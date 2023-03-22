import React,{ useRef } from 'react'

const Ref = () => {
    
    const a1Ref = useRef(null);
    const a2Ref =useRef(null);
    const a3Ref = useRef(null)

    const AColor = () => {
        a1Ref.current.style.backgroundColor = "orange";
        a2Ref.current.style.backgroundColor = "";
        a3Ref.current.style.backgroundColor = "green";

    

    }
        return (
            <div>
                <div ref={a1Ref}>first</div>
                <div ref={a2Ref} > vande matram</div>
                <div ref={a3Ref}>third</div>
                <button onClick={() => AColor(a1Ref,a2Ref,a3Ref)}> color on click</button>
                
            </div>
        );
    }

    export default Ref
