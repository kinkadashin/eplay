import Tag from '../Tag'

import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" alt="" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa ipsum vero,
      aliquam a enim assumenda unde molestiae sit id! Beatae blanditiis
      quibusdam a maxime maiores officia tempora repudiandae sunt repellat.
    </Descricao>
  </Card>
)

export default Product
