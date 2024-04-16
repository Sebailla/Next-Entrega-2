import Link from 'next/link'
import './card.css'

interface ComponetCardProps {
    id: string;
    title: string;
    subTitle: string;
    image: string;

}

export default function Card (props: ComponetCardProps) {
    return (
        <>
            <div key={props.id} className='card'>
                <div className='cardTitle'>
                    <h2>{props.title}</h2>
                </div>
                <div className='cardImage'>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className='cardSubtitle'>
                    <p>{props.subTitle}</p>
                </div>
                <div className='cardFooter'>
                    <Link href={`/${props.id}`}>
                        <button type="button" className='cardButton'>Leer mas...</button>
                    </Link>
                </div>
            </div>
        </>

    )
}