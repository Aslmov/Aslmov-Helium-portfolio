import {
    Heading,
      Container,
      Badge,
      Link,
      List,
      ListItem,
      UnorderedList,
      Center,
      Image,
    } from '@chakra-ui/react'
    import Layout from '../../../components/layouts/article'
    import { ExternalLinkIcon } from '@chakra-ui/icons'
    import { Title, Meta,  } from '../../../components/work'
    import P from '../../../components/paragraph'
    import thumbleMood from '../../../images/mood.png'

  

    const Work = () => {
    

      return (
        <Layout title="mood">
          <Container>
            <Title>
              Mood <Badge>2024 - 2025 </Badge>
            </Title>
            <Center my={6}>
              <Image src={thumbleMood.src} alt="test" maxW="500px" w="100%" />
            </Center>
            
            
            <Heading as="h3" fontSize={20} mb={4} mt={8}>
              Description
            </Heading>
    
            <P>
            Une application de rencontre unique qui met l&apos;émotion au cœur des connexions. En analysant l&apos;humeur de l&apos;utilisateur, elle propose des correspondances basées sur la compatibilité émotionnelle, permettant ainsi de créer des relations plus authentiques et harmonieuses. Grâce à une approche intuitive et personnalisée, elle aide chaque utilisateur à trouver un partenaire qui partage son état d&apos;esprit et ses aspirations du moment.
            </P>
    
    
            <Heading as="h3" fontSize={20} mb={4} mt={8}>
              Participations
            </Heading>
            <UnorderedList ml={4} my={4}>
              <ListItem>Contribution au développement Front-end de l&apos;application Mobile GoChap mobile basé sur React Native . </ListItem>
              <ListItem>Contribution au backend basé sur Firebase</ListItem>
              <ListItem>développement du système de compte premium, direct dm et Matching</ListItem>
            
            
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
                <Meta>Stack</Meta>
                <span>Flutter, Firebase</span>
              </ListItem>
          
          
              
              <ListItem>
                <Meta>Site officiel</Meta>
                <Link href="https://akkkka.web.app">Mood<ExternalLinkIcon mx="2px" /></Link>
              </ListItem>
            </List>
            

     </Container>
      </Layout>
      )}
    export default Work;
      export { getServerSideProps } from '../../../components/chakra';