import api from '@/api'
import Card from './components/card'

export default async function MainPage() {
  const notices = await api.list()
  
  return (

    <section>
      {
        notices.map(notice => {
          return (
            <Card id={notice.id} title={notice.title} subTitle={notice.subTitle} image={notice.image} />
          )
        })
      }
    </section>


  )
}