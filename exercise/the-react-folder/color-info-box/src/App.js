import React from 'react'
import ColorBox from './Color-Box.js'
import './styles.css'


const App = () => {
    return (
        <div className="main-container">
            <ColorBox backgroundColor ="blue" title="Water" subtitle="The life Blood of the Earth" information=" loremisnidno aodfoaidj aosdifaosdnf aosdfnaisfn oasfdanos" />
            <ColorBox backgroundColor ="green"n title="Fire" subtitle="The Force for Rebirth of the Earth" information=' sliowneron sodifno owefin osidfnos oewierw osidfj oweir s'/>
            <ColorBox infoBox = 'box3' tilte ="Earth" subtitle ="The Body which houses the Soul of the Earth" information =" soisdfonw oasidfowiensosidfo ieriohw oiwheior nosinosheow"/>
        </div>
    )
}

export default App