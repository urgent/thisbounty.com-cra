import React, {ReactChildren} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart'


export function Heart({fill, color, children}:{fill?:boolean, color?:string, children?:ReactChildren}) {
    return <span>
            <FontAwesomeIcon icon={faHeart} style={{"strokeWidth":50, stroke:"#F00", color:"rgba(0,0,0,0)"}}/>
            {children}
        </span>
}