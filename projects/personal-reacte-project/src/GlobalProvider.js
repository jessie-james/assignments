// import React from 'react'
// import axios from 'axios';

// const { Consumer, Provider } = React.createContext()

// class GlobalProvider extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             countryCodes: [],
//         }
    
//     }
//     componentDidMount() {
//         axios.get('https://data.fixer.io/api/latest?access_key=e99f1218ad91423282c6bb4d9013b35b').then(response => {
//             this.setState({ countryCodes: response.data })
//         }
//         )
//         console.log(this.countryCodes)
//     }
    
    
//     render() {
//         return(
//             <Provider>
//                 {this.props.children}
//             </Provider>
//         )
//     }
// }
// export default GlobalProvider

// export const withGlobal = Component => props =>
//     <Consumer>
//     {value => <Component {...value}{...props}/>}
//     </Consumer>
