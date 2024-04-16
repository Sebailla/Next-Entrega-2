import api from '@/api'
import Article from '../components/article'


export default async function NoticePage({ params: { id } }: { params: { id: string } }) {
    const notice = await api.fetch(id)

    return (
        <>
            <Article id={notice.id} title={notice.title} subTitle={notice.subTitle} image={notice.image}/>
        </>

    )
}