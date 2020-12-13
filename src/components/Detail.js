import React from "react";
import "./Detail.css";

class Detail extends React.Component{
    componentDidMount(){
        const {location, history} = this.props;
        if (location.state === undefined){
            history.push("/");
        }
    }
    render(){
        const detail = this.props.location.state;
        if (detail){
            return (
                <div className="detail__movie">
                        <img className="detail__movie__image" src={detail.poster} alt={detail.title} title={detail.title}/>
                        <div className="detail__movie__data">
                            <h3 className="detail__movie__data__title">{detail.title}</h3>
                            <h5 className="detail__movie__data__year">{detail.year}</h5>
                            <ul className="genres">
                                
                            </ul>
                            <p className="detail__movie__data__summary">{detail.summary}</p>
                        </div>
                    </div>
            );
        } else {
            return null;
        } 
    }
}

// function Detail(props){
//     let movie = props.location.state;
//     return (
//         <div className="detail__movie">
//                 <img className="detail__movie__image" src={movie.poster} alt={movie.title} title={movie.title}/>
//                 <div className="detail__movie__data">
//                     <h3 className="detail__movie__data__title">{movie.title}</h3>
//                     <h5 className="detail__movie__data__year">{movie.year}</h5>
//                     <ul className="genres">
                        
//                     </ul>
//                     <p className="detail__movie__data__summary">{movie.summary}</p>
//                 </div>
//             </div>
//     );
// }

export default Detail;