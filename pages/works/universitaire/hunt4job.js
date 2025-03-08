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
  
    const Work = () => (
      <Layout title="hunt4job">
        <Container>
          <Title>
            Hunt4job <Badge> 2025 </Badge>
          </Title>
          <Center my={6}>
            <Image src='../image/hunt4job.png' alt="hunt4job" />
          </Center>
          
          
          <Heading as="h3" fontSize={20} mb={4} mt={8}>
            Description
          </Heading>
    
          <P>
          L&apos;application de recherche d&apos;emploi repose sur une combinaison de web scraping et d&apos;intelligence artificielle afin d&apos;offrir aux utilisateurs des recommandations optimisées et personnalisées en fonction de leurs compétences, de leurs expériences et de leurs préférences, en s&apos;appuyant sur une analyse approfondie des offres d&apos;emploi collectées à partir de diverses plateformes en ligne.
          </P>
  
  
          <Heading as="h3" fontSize={20} mb={4} mt={8}>
            Participations
          </Heading>
          <UnorderedList ml={4} my={4}>
            <ListItem>Développement Front-end de l&apos;application basé sur React</ListItem>
            <ListItem>Contribution à la méthode de web scrapping  basé sur BeautifulSoup et requests</ListItem>
            <ListItem>Contribution à l&apos;ia basé sur Tensoflow</ListItem>
            <ListItem>développement du système de recommendation</ListItem>
          
          
          </UnorderedList>
  
          <Heading as="h3" fontSize={20} mb={4} mt={8}>
          Références
        </Heading>
    
          <List ml={4} my={4}>
            <ListItem>
              <Meta>Plateforme</Meta>
              <span>Web, Android, iOS</span>
            </ListItem>
        
             <ListItem>
              <Meta>Télécharger</Meta>
              <Link href="https://github.com/Aslmov/hunt4job">
                <Badge mr={2}>Github</Badge>
                {' '}
                <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem> 
            
            <ListItem>
              <Meta>Site officiel</Meta>
              <Link href="">Hunt4job (En Maintenance)<ExternalLinkIcon mx="2px" /></Link>
            </ListItem>
          </List>
    
     </Container>
      </Layout>
    )
    
    export default Work
    export { getServerSideProps } from '../../../components/chakra'