import { MdLocationOn } from 'react-icons/md';

export default function Card(props) {
    return (
        <section className="card">
            <img src={`../images/${props.img}`} />
            <div className="place-info">
                <div className="place-header">
                    <h4><span className='icon'><MdLocationOn /></span>{props.location}</h4>
                    <a href={props.moreInfo} target="_blank">View More Info</a>
                </div>
                <h1>{props.title}</h1>
                <p className='dates'><span>{props.startDate}</span> - <span>{props.endDate}</span></p>

                <p>{props.desc}</p>

            </div>
        
        </section>
    )
}