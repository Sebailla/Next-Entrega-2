import api from '@/api'
import Card from './components/card'
import './page.css'

export default async function MainPage() {
  const notices = await api.list()
  
  return (

    <div className='mainContainer'>
      {
        notices.map(notice => {
          return (
            <Card id={notice.id} title={notice.title} subTitle={notice.subTitle} image={notice.image} />
          )
        })
      }
    </div>


  )
}