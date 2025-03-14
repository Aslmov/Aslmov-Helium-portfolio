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
      <Layout title="fruit">
        <Container>
          <Title>
            Mood <Badge>2023</Badge>
          </Title>
          <Center my={6}>
            <Image src='../image/biblioteka.png' alt="test" />
          </Center>
          
          
          <Heading as="h3" fontSize={20} mb={4} mt={8}>
            Description
          </Heading>
    
          <P>
          Ce projet est une initiation au traitement batch dans un environnement Big Data en utilisant Apache Hadoop et le paradigme MapReduce. L&apos;objectif est de comprendre et manipuler le stockage et le traitement des données volumineuses sur un cluster Hadoop via HDFS (Hadoop Distributed File System) et d&apos;exécuter des jobs MapReduce pour analyser des données.

Pour assurer une configuration simplifiée et homogène du cluster Hadoop, nous avons utilisé Docker, permettant ainsi de déployer un environnement reproductible avec trois nœuds :
          </P>
          <UnorderedList ml={4} my={4}>
            <ListItem>Un nœud maître (Namenode) pour gérer la distribution et l&apos;organisation des fichiers sur le cluster.</ListItem>
            <ListItem>Deux nœuds esclaves (Datanodes) pour stocker et traiter les données de manière distribuée</ListItem>
          </UnorderedList>
          <Heading as="h3" fontSize={20} mb={4} mt={8}>
            Tâches effectuées
          </Heading>
          <UnorderedList ml={4} my={4}>
            <ListItem> Installation et configuration du cluster Hadoop avec Docker</ListItem>
            <ListItem>Déploiement d’une architecture Hadoop sur Docker avec trois conteneurs.</ListItem>
            <ListItem>Manipulation du système de fichiers distribué HDFS</ListItem>
            <ListItem>Développement et exécution de jobs MapReduce</ListItem>
            <ListItem>Monitoring et analyse des performance</ListItem>
          
          
          </UnorderedList>
  
          <Heading as="h3" fontSize={20} mb={4} mt={8}>
          Références
        </Heading>
    
          <List ml={4} my={4}>
         
            <ListItem>
              <Meta>Plateforme</Meta>
              <span>Windows, Linux</span>
            </ListItem>
            <ListItem>
              <Meta>Stack</Meta>
              <span>Apache Hadoop (HDFS, MapReduce, YARN), Java 1.8, Maven, Docker, VS Code</span>
            </ListItem>
        
             <ListItem>
              <Meta>Télécharger</Meta>
              <Link href="https://gochap.solutions/telecharger/">
                <Badge mr={2}>Github</Badge>
                {' '}
                <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem> 
     
          </List>
    
     </Container>
      </Layout>
    )
    
    export default Work
    export { getServerSideProps } from '../../../components/chakra'