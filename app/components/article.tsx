import Link from 'next/link'
import './article.css'

interface ComponetCardProps {
    id: string;
    title: string;
    subTitle: string;
    image: string;

}

export default function Article(props: ComponetCardProps) {
    return (
        <>
            <div key={props.id} className='article'>
                <div className='articleTitle'>
                    <h1>{props.title}</h1>
                </div>
                <div className='articleSubtitle'>
                    <p>{props.subTitle}</p>
                </div>
                <div className='articleImage'>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className='articleBody'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quas consectetur assumenda voluptatibus, illo, neque consequatur alias molestias deleniti magnam voluptatum reprehenderit nobis sequi error exercitationem nam eius obcaecati voluptas quos consequuntur at dolorem laboriosam? Veniam neque omnis voluptate doloremque aliquam et eveniet cupiditate quibusdam ducimus perferendis saepe sequi praesentium asperiores facilis, perspiciatis ratione at quam eligendi animi quasi! Temporibus, harum soluta, earum nam quia reiciendis quidem, consequuntur eveniet adipisci officia repudiandae accusamus blanditiis tempore obcaecati perferendis laborum reprehenderit omnis? Quia, modi maiores. Veritatis, aliquam. Natus eaque laborum qui odio, cum totam quos harum laudantium dolor, veniam excepturi quae dolorem, officia ab quam voluptas enim quasi! Tempore dignissimos assumenda sequi, porro similique iste, officiis quidem fugit voluptatem odio et hic aliquid? Nisi laboriosam, iste optio sit nemo facere eveniet est et aspernatur repellat porro, tenetur sunt! Vitae corporis harum doloremque dolorum accusantium consequuntur fuga est eum iure qui quam voluptatibus corrupti inventore sapiente, deleniti quo explicabo quae iusto natus debitis consequatur a optio, id facilis! Impedit possimus hic, perspiciatis incidunt ea aliquid sint nesciunt tempore expedita commodi adipisci! Dignissimos pariatur voluptatibus quo dolores suscipit in, dolorum dicta cum. Ipsum a distinctio optio animi enim nobis id tenetur? Id voluptate, perferendis adipisci pariatur placeat illo quam eum labore architecto. Odio quod eveniet officiis quasi aliquid! Sit architecto mollitia, quod unde facere accusantium assumenda, aut consequatur labore quis reprehenderit ad quibusdam laboriosam? Provident porro natus optio nobis, alias minima, esse dolores soluta exercitationem nulla modi quibusdam ab reprehenderit pariatur repellendus fugit facere</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, earum. Quasi dignissimos minima, beatae aut laboriosam maxime, hic eum numquam cum, natus minus temporibus adipisci et sed quidem odit. Molestias dolorem praesentium ullam ducimus quibusdam deserunt. Est cupiditate nostrum suscipit qui, nobis laudantium quas officiis velit cumque voluptates! Aperiam error nam dicta accusantium totam sed suscipit quidem quasi quo obcaecati accusamus eligendi ullam necessitatibus impedit amet odit dolorum rerum quas nobis tempore natus reprehenderit, praesentium quod exercitationem. Nisi minus molestias mollitia hic facere voluptatibus numquam ut, distinctio similique doloremque atque quo vel id maxime odit deleniti dolor cumque ullam, corrupti perferendis iste fugit? Dolore architecto, ducimus omnis eveniet voluptas suscipit. Quis facilis placeat adipisci suscipit, iste rerum, obcaecati veniam sed ullam vel sequi voluptatum provident. Omnis ad ipsa commodi culpa officiis cum dolorum, cupiditate aut odio voluptatibus ea, repudiandae dignissimos suscipit. Iure laboriosam nobis vitae, assumenda ducimus quidem non fuga.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsum quam facere qui earum minima quibusdam nobis nostrum sapiente. Quo, totam? Minima ullam iure nam et vel molestias ratione modi, ut nihil esse alias minus eligendi laborum natus ea culpa, facilis molestiae quod exercitationem voluptatibus necessitatibus, mollitia excepturi? Animi modi consequuntur inventore commodi, suscipit eius quaerat eum possimus quisquam cupiditate. Incidunt architecto consequatur voluptas beatae ipsa odio, blanditiis sit quos veniam placeat cumque magnam, sint possimus rem reiciendis, eveniet voluptatem aliquid. Sapiente facere accusantium tempore, officiis saepe consectetur vel dolorem suscipit. Aliquam ipsa unde iste, eum voluptatum magni reprehenderit facilis veritatis suscipit itaque nihil fugiat voluptatem. Molestias error repellat maiores dolorum eligendi porro delectus, eius ut facilis illo nemo odio quas, expedita ipsam velit minima veritatis enim optio aut sit exercitationem cum facere? Odio minima nobis porro, quis architecto, fugiat repellendus ea unde dignissimos esse veniam illum optio. Exercitationem consequuntur repudiandae hic harum quod! Magni dolorum repellendus quaerat ducimus odio accusantium vel quo? Rem nostrum corrupti facilis architecto vitae sapiente alias voluptatem! Officia, nemo nobis. Consequatur, est, porro quo provident culpa expedita incidunt omnis dolores voluptatem laudantium deleniti cum officiis dolore ea molestiae error sapiente, iusto officia commodi asperiores eligendi?</p>
                </div>
                <div className='articleFooter'>
                    <Link href={`/`}>
                    <button type="button" className='articleButton'>Todos los Atículos</button>
                </Link>
                </div>
            </div>
        </>

    )
}