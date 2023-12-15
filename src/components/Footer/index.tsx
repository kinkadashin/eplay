import {
  Container,
  FooterSection,
  Link,
  Links,
  SectionTitle,
  Copyright
} from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <li>
            <Link to="/categories#action">Ação</Link>
          </li>
          <li>
            <Link to="/categories#sports">Esportes</Link>
          </li>
          <li>
            <Link to="/categories#simulation">Simulação</Link>
          </li>
          <li>
            <Link to="/categories#fight">Luta</Link>
          </li>
          <li>
            <Link to="/categories#rpg">RPG</Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso rápido</SectionTitle>
        <Links>
          <li>
            <Link to="#on-sale">Promoções</Link>
          </li>
          <li>
            <Link to="#coming-soon">Em breve</Link>
          </li>
        </Links>
      </FooterSection>
      <Copyright>
        {currentYear} - &copy; - E-PLAY Todos os direitos reservados
      </Copyright>
    </div>
  </Container>
)

export default Footer
