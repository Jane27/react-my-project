import React, {Component}  from 'react';




const NameCard = (props) =>{
    const {name, number, isHuman, tags} = props;
        
        return (
            <div className='alert alert-success'>
                <h4 className='alert-heading'>{name}</h4>
                <ul>
                    <li>Tel: {number}</li>
                    <li>{ isHuman ? 'human': 'others'}</li>
                    <br/>
                    <p>
                        {tags.map((tag, index) => (
                            <span className='badge badge-pill badge-primary' key={index}>{tag}</span>
                        ))}
                    </p>

                </ul>
            </div>
        )

}

// class NameCard extends Component {
//     render() {
//         const {name, number, isHuman, tags} = this.props;
        
//         return (
//             <div className='alert alert-success'>
//                 <h4 className='alert-heading'>{name}</h4>
//                 <ul>
//                     <li>Tel: {number}</li>
//                     <li>{ isHuman ? 'human': 'others'}</li>
//                     <br/>
//                     <p>
//                         {tags.map((tag, index) => (
//                             <span className='badge badge-pill badge-primary' key={index}>{tag}</span>
//                         ))}
//                     </p>

//                 </ul>
//             </div>

//         )
//     }
// }

export default NameCard;
