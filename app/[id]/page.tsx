import api from '@/api'
import Card from '../components/card'


export default async function NoticePage({ params: { id } }: { params: { id: string } }) {
    const notice = await api.fetch(id)

    return (
        <>
            <Card id={notice.id} title={notice.title} subTitle={notice.subTitle} image={notice.image}/>
        </>

    )
}