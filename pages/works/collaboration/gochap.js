import {
  Heading,
    Container,
    Badge,
    Link,
    List,
    ListItem,
    UnorderedList,
    Center,
    Image
  } from '@chakra-ui/react'
  import Layout from '../../../components/layouts/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, Meta } from '../../../components/work'
  import P from '../../../components/paragraph'
  import thumbleGochap from '../../../images/gochap.png'

  const Work = () => (
    <Layout title="gochap">
      <Container>
        <Title>
          GoChap <Badge>2023</Badge>
        </Title>
        <Center my={6}>
          <Image 
            src={thumbleGochap.src} 
            alt="GoChap" 
            
          />
        </Center>
        
        
        <Heading as="h3" fontSize={20} mb={4} mt={8}>
          Description
        </Heading>
        <P>
        GoChap est une application polyvalente qui propose une gamme de services adaptés aux besoins du quotidien. Elle permet de se déplacer facilement, de livrer des colis en toute simplicité, de louer un véhicule selon ses besoins et de commander des repas en quelques clics. En plus de ces services, GoChap fonctionne également comme une marketplace, offrant une plateforme d&apos;achat et de vente entre professionnels et particuliers.
        </P>


        <Heading as="h3" fontSize={20} mb={4} mt={8}>
          Participations
        </Heading>
        <UnorderedList ml={4} my={4}>
          <ListItem>Contribution au développement d&apos;applications web innovantes en utilisant des technologies frontend et backend modernes basé sur .NET</ListItem>
          <ListItem>Contribution au développement Front-end de l&apos;application
Mobile GoChap mobile basé sur React Native .
</ListItem>
        
        </UnorderedList>

        <Heading as="h3" fontSize={20} mb={4} mt={8}>
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
  
   </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../../components/chakra'