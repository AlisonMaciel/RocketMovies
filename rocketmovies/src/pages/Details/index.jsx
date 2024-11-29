import { Container, Content } from "./styled";

import {Header} from "../../components/Header"
import { ButtonText } from "../../components/ButtonText";
import {Tags} from "../../components/Tags"

import { FiArrowLeft } from "react-icons/fi";

import ImgClock from "../../assets/Vector (1).svg"
import Img from "../../assets/Group 7579.svg"

export function Details() {
    return (
        <Container>
            <Header placeholder="Pesquisar pelo título"/>

            <Content>
                <ButtonText title="Voltar" icon={FiArrowLeft}/>

                <div className="title">
                    <h1>INTERESTELLAR</h1>
                    <img src={Img} />
                </div>

                <div className="info">
                    <div>
                        <img src="https://github.com/AlisonMaciel.png"  />
                        <span>Por Alison Maciel</span>
                    </div>

                    <div>
                        <img src={ImgClock}  />
                        <span>23/05/22 ás 08:00</span>
                    </div>
                </div>

                <Tags title="Express"/>
                <Tags title="Node.js"/>
                <Tags title="React.js"/>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque neque deleniti similique perspiciatis totam non aperiam pariatur doloribus, quasi rerum eum quae voluptatum quidem! Quae harum qui est aperiam ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo rerum incidunt hic tempore. Fugit, nisi, aliquid amet saepe eos suscipit ipsa tenetur, fuga impedit illum eaque. Obcaecati sed reiciendis aspernatur. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolorum ea quos iure ullam quibusdam dolores est dignissimos a, quis odio ipsum vero nostrum. At vel esse dolorum alias ratione? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum itaque, omnis iure ad porro perspiciatis quisquam magnam est iste neque nihil nam totam nobis, aperiam id quaerat, rem quasi dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odio temporibus dicta ducimus quidem accusantium deserunt ut, rerum sint, quisquam maxime sapiente vero similique, ad assumenda. Et, quam officiis. Voluptatem? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat voluptates consequuntur praesentium earum accusamus sit, esse architecto doloremque provident, harum sequi est aspernatur ullam. Velit unde dignissimos officia fuga explicabo! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error minus dolorum tempora iusto officiis, veritatis excepturi distinctio assumenda accusantium, est architecto perspiciatis, aliquid placeat reiciendis fuga obcaecati beatae et exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ipsam totam consectetur inventore molestias tempore voluptatem aperiam laboriosam illo soluta eligendi, non ut asperiores consequuntur dolore sed, iusto, nemo alias. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum autem rerum tenetur sequi. At aliquam culpa exercitationem distinctio maiores eaque blanditiis sunt perferendis. Iste beatae quos, rerum delectus dolorem hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptatem qui quas harum quisquam molestiae expedita praesentium consequuntur vero dolor nesciunt iste dolorum voluptas, perferendis laboriosam officiis, quis necessitatibus neque! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam unde officia voluptatem id earum quidem et nisi maiores soluta obcaecati iusto expedita rerum nostrum, consectetur vitae architecto corporis nesciunt doloremque? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, id distinctio? Nisi earum officia aliquam, sunt ipsa minima sed, eum iste enim provident nesciunt sit quae in at dicta voluptate? Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse hic exercitationem fugiat dolores pariatur asperiores officiis dolor ea quisquam, voluptas eos! Vitae velit saepe atque natus ratione, totam dolorem beatae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas reiciendis ipsum consequuntur? Expedita reprehenderit necessitatibus, aliquam maiores alias voluptas, ullam unde suscipit enim est nulla error asperiores obcaecati ipsum! Commodi?


                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat tempora repellat sapiente, cum ipsum numquam necessitatibus odio architecto, beatae sit quibusdam nesciunt qui ad eum doloribus blanditiis illo recusandae totam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam odit soluta ipsa maxime vel, quidem praesentium illo iusto ipsam corporis, quaerat illum, iure ex cum aut similique maiores? Minima, esse.
                </p>


            </Content>

        </Container>
    )
}