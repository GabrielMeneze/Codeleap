import React from 'react'
import { useSelector } from 'react-redux';

function Idlist() {
    const ids = useSelector(state => state.data);
    return(
        [ids]
    )
}

export default Idlist;