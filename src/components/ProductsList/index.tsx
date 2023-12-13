import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductsList = ({ background, title }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        <Product
          category="Ação"
          description="Teste"
          image="//placehold.it/222x250"
          infos={['-10%', 'R$ 150']}
          system="Windows"
          title="Jogos Vorazes"
        />
        <Product
          category="Ação"
          description="Teste"
          image="//placehold.it/222x250"
          infos={['-10%', 'R$ 150']}
          system="Windows"
          title="Jogos Vorazes"
        />
        <Product
          category="Ação"
          description="Teste"
          image="//placehold.it/222x250"
          infos={['-10%', 'R$ 150']}
          system="Windows"
          title="Jogos Vorazes"
        />
        <Product
          category="Ação"
          description="Teste"
          image="//placehold.it/222x250"
          infos={['-10%', 'R$ 150']}
          system="Windows"
          title="Jogos Vorazes"
        />
      </List>
    </div>
  </Container>
)

export default ProductsList
