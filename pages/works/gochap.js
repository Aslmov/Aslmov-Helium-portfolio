import {
  Heading,
    Container,
    Badge,
    Link,
    List,
    ListItem,
    SimpleGrid,
    UnorderedList,
    Center,
    Image
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  
  const Work = () => (
    <Layout title="gochap">
      <Container>
        <Title>
          GoChap <Badge>2023</Badge>
        </Title>
        <Center my={6}>
          <Image src="/images/gochap.png" alt="icon" />
        </Center>
        <P>
        Plateforme digitale de services de mobilité et de livraison
        </P>
        <P>
        GoChap est une application qui offre plusieurs services notamment pour se déplacer, livrer un colis, louer un véhicule et commander à manger. C&apos;est également une marketplace, une plateforme d&apos;achat et de vente entre professionnels et particuliers.
        </P>
        
        <Heading as="h3" fontSize={20} mb={4}>
        </Heading>

        
        <UnorderedList ml={4} my={4}>
          <ListItem>Transfert de fichiers rapide sans limite de taille</ListItem>
          <ListItem>Communication simultanée entre plusieurs ordinateurs</ListItem>
          <ListItem>
            Fonction de connexion automatique pour simplifier la configuration
          </ListItem>
        
        </UnorderedList>

        <Heading as="h3" fontSize={20} mb={4}>
        Références
      </Heading>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Plateforme</Meta>
            <span>Android, iOS</span>
          </ListItem>
      
          <ListItem>
            <Meta>Télécharger</Meta>
            <Link href="https://gochap.solutions/telecharger/">
              <Badge mr={2}>Android, iOS</Badge>
              {' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
         
          </ListItem>
          <ListItem>
            <Meta>Site officiel</Meta>
            <Link href="https://gochap.solutions/">GoChap Solutions   <ExternalLinkIcon mx="2px" /></Link>
          </ListItem>
        </List>
  
   
        <SimpleGrid columns={2} gap={2}>
          <WorkImage src="/images/works/amembo_01.gif" alt="amembo" />
          <WorkImage src="/images/works/amembo_02.gif" alt="amembo" />
        </SimpleGrid>
        <WorkImage src="/images/works/amembo_03.jpg" alt="amembo" />
        <WorkImage src="/images/works/amembo_04.jpg" alt="amembo" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'