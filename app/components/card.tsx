import Link from 'next/link'

interface ComponetCardProps {
    id: string;
    title: string;
    subTitle: string;
    image: string;

}

export default function Card(props: ComponetCardProps) {
    return (
        <>
            <article key={props.id}>
                <Link href={`/${props.id}`}>
                    <h2>{props.title}</h2>
                </Link>
                <p>{props.subTitle}</p>
                <img src={props.image} alt={props.title} />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quas consectetur assumenda voluptatibus, illo, neque consequatur alias molestias deleniti magnam voluptatum reprehenderit nobis sequi error exercitationem nam eius obcaecati voluptas quos consequuntur at dolorem laboriosam? Veniam neque omnis voluptate doloremque aliquam et eveniet cupiditate quibusdam ducimus perferendis saepe sequi praesentium asperiores facilis, perspiciatis ratione at quam eligendi animi quasi! Temporibus, harum soluta, earum nam quia reiciendis quidem, consequuntur eveniet adipisci officia repudiandae accusamus blanditiis tempore obcaecati perferendis laborum reprehenderit omnis? Quia, modi maiores. Veritatis, aliquam. Natus eaque laborum qui odio, cum totam quos harum laudantium dolor, veniam excepturi quae dolorem, officia ab quam voluptas enim quasi! Tempore dignissimos assumenda sequi, porro similique iste, officiis quidem fugit voluptatem odio et hic aliquid? Nisi laboriosam, iste optio sit nemo facere eveniet est et aspernatur repellat porro, tenetur sunt! Vitae corporis harum doloremque dolorum accusantium consequuntur fuga est eum iure qui quam voluptatibus corrupti inventore sapiente, deleniti quo explicabo quae iusto natus debitis consequatur a optio, id facilis! Impedit possimus hic, perspiciatis incidunt ea aliquid sint nesciunt tempore expedita commodi adipisci! Dignissimos pariatur voluptatibus quo dolores suscipit in, dolorum dicta cum. Ipsum a distinctio optio animi enim nobis id tenetur? Id voluptate, perferendis adipisci pariatur placeat illo quam eum labore architecto. Odio quod eveniet officiis quasi aliquid! Sit architecto mollitia, quod unde facere accusantium assumenda, aut consequatur labore quis reprehenderit ad quibusdam laboriosam? Provident porro natus optio nobis, alias minima, esse dolores soluta exercitationem nulla modi quibusdam ab reprehenderit pariatur repellendus fugit facere</p>
            </article>
        </>

    )
}